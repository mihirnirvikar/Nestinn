require('events').EventEmitter.defaultMaxListeners = 50;

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
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
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("ejs", ejaMate);

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 7 * 24 * 60 * 60
     * 1000,
    maxAge: 7 * 24 * 60 * 60
     * 1000,
  },  
};

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});


app.use("/listings", listingsRouter)
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/register", userRouter);


async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });



// app.get("/", (req, res) => {
//   res.send("Hello from NestInn");
// });

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
  console.log(`Server is listening at http://localhost:${port || 8080}/listings`);
});
