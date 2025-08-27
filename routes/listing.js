const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingJoiSchema, reviewJoiSchema } = require("../Schema.js");

// server side validation on listing data
const validateListing = (req, res, next) => {
  const { error } = listingJoiSchema.validate(req.body.listing, {
    convert: true,
  });
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    console.log(msg);
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

// show all listings route  READ ROUTE
router.get(
  "/",
  wrapAsync(async (req, res, next) => {
    const allListings = await Listing.find({});
    res.render("listings/home.ejs", { listings: allListings });
  })
);

// create new listings route CREATE ROUTE
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Create show route of the listing   SHOW ROUTE
router.get(
  "/:id",
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

// Create post route to store new listing data to DB   NEW CREATE ROUTE
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body);
    await newListing.save();
    req.flash("success", "Successfully made a new listing!");
    res.redirect(`/listings/${newListing._id}`);
  })
);

// Create edit route for listing   EDIT ROUTE
router.get(
  "/:id/edit",
  wrapAsync(async (req, res, next) => {
    const id = req.params.id;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing: listing });
  })
);

// Create Edited route to store new values to Db   UPDATE EDIT ROUTE
router.put(
  "/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;

    if (req.body.price) {
      req.body.price = Number(req.body.price);
    }

    const listing = await Listing.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!listing) {
      return next(new ExpressError(404, "Listing not found"));
    }
    req.flash("success", "Successfully updated listing!");
    res.redirect(`/listings/${listing._id}`);
  })
);

// Create delete route to delete data from DB   DELETE ROUTE
router.delete(
  "/:id",
  wrapAsync(async (req, res, next) => {
    const id = req.params.id;
    const deleteListing = await Listing.findByIdAndDelete(id);
    // console.log(deleteListing);
    req.flash("success", "Successfully deleted listing");
    res.redirect("/listings");
  })
);

module.exports = router;
