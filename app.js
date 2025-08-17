const express = require("express");
const methodOverride = require("method-override");
const app = express();
const mongoose = require("mongoose");
const ejaMate = require("ejs-mate");
const port = 8080;
const path = require("path");
const Listing = require("./models/listing.js");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { listingJoiSchema, reviewJoiSchema } = require("./Schema.js");
const Review = require("./models/review.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("ejs", ejaMate);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/NestInn");
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });


 const validateListing = (req, res, next) => {
  const { error } = listingJoiSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    console.log(msg);
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
 } 

 const validateReview = (req, res, next) => {
  console.log(req.body);
  const { error } = reviewJoiSchema.validate(req.body, {convert : true});
  if(error){
    const msg = error.details.map((el) => el.message).join(",");
    console.log(msg);
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
 }


app.get("/", (req, res) => {
  res.send("Hello from NestInn");
});

// app.get('/testListing', async(req, res) => {
//     const sampleListing = new Listing({
//       title: "Test Listing",
//       description: "This is a test listing",
//       image: "",
//       price: 100,
//       location: "New York",
//       country: "United States"
//     })

//     sampleListing.save().then((listing) => {
//       res.send(listing);
//     }).catch((err) => {
//       console.log(err);
//     })
// });

// show all listings route  READ ROUTE
app.get(
  "/listings",
  wrapAsync(async (req, res, next) => {
    const allListings = await Listing.find({});
    res.render("listings/home.ejs", { listings: allListings });
  })
);

// create new listings route CREATE ROUTE
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Create show route of the listing   SHOW ROUTE
app.get(
  "/listings/:id",
  wrapAsync(async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new ExpressError(400, "Listing not found"));
    }
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      return next(new ExpressError(404, "Listing not found"));
    }

    res.render("listings/show.ejs", { listing });
  })
);

// Create post route to store new listing data to DB   UPDATE ROUTE
app.post("/listings", validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect(`/listings/${newListing._id}`);
  })
);

// Create edit route for listing   EDIT ROUTE
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res, next) => {
    const id = req.params.id;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing: listing });
  })
);

// Create Edited route to store new values to Db   UPDATE EDIT ROUTE
app.put(
  "/listings/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;

    // Convert price to number manually (if present)
    if (req.body.listing?.price) {
      req.body.listing.price = Number(req.body.listing.price);
    }

    // Update listing
    const listing = await Listing.findByIdAndUpdate(id, req.body.listing, {
      new: true,
      runValidators: true,
    });

    if (!listing) {
      return next(new ExpressError(404, "Listing not found"));
    }

    res.redirect(`/listings/${listing._id}`);
  })
);

// Create delete route to delete data from DB   DELETE ROUTE
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res, next) => {
    const id = req.params.id;
    const deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect("/listings");
  })
);

// Review Route 
app.post('/listings/:id/reviews', validateReview,  wrapAsync(async (req, res, next) => {
  const id = req.params.id;
  const listing = await Listing.findById(id);
  const review = new Review(req.body);
  await review.save();
  listing.reviews.push(review._id);
  await listing.save();
  res.redirect(`/listings/${id}`);
}))




// For all other routes
app.all(/.*/, (req, res, next) => {
   next(new ExpressError(404, "Page not Found"));
})

// Error handling middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/listings`);
});
