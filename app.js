require('events').EventEmitter.defaultMaxListeners = 50;


const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const ejaMate = require("ejs-mate");
const port = 8080;
const path = require("path");
const Listing = require("./models/listing.js");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { listingJoiSchema, reviewJoiSchema } = require("./Schema.js");
const Review = require("./models/review.js");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

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

app.use("/listings", listings)
app.use("/listings/:id/reviews", reviews);







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
