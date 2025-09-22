const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing.js");
const mongoose = require("mongoose");


// SHOW ALL LISTINGs ROUTE to show all listings
const showAllListings = wrapAsync(async (req, res, next) => {
  const allListings = await Listing.find({});
  res.render("listings/home.ejs", { listings: allListings });
});


// NEW ROUTE to create new listing
const newListing = (req, res) => {
  res.render("listings/new.ejs");
};


// SHOW ROUTE
const showListing = wrapAsync(async (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ExpressError(400, "Listing not found"));
  }
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    return next(new ExpressError(404, "Listing not found"));
  }

  res.render("listings/show.ejs", { listing });
});


// POST ROUTE to store new listing data to DB
const createListing = wrapAsync(async (req, res, next) => {
  const url = req.file.path;
  const { filename } = req.file; 
  const newListing = new Listing(req.body);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  const result = await newListing.save();
  // console.log(result);
  req.flash("success", "Successfully made a new listing!");
  res.redirect(`/listings/${newListing._id}`);
});


// SHOW EDIT ROUTE for listing
const editListing = wrapAsync(async (req, res, next) => {
  const id = req.params.id;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing: listing });
});


// UPDATE EDIT ROUTE for listing
const updateListing = wrapAsync(async (req, res, next) => {
  const { id } = req.params;

  if(typeof req.file !== "undefined"){
    const url = req.file.path;
    const { filename } = req.file;
    req.body.image = { url, filename };
  }

  if (req.body.price) {
    req.body.price = Number(req.body.price);
  }

  const listing = await Listing.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  // console.log(listing);

  if (!listing) {
    return next(new ExpressError(404, "Listing not found"));
  }

  req.flash("success", "Successfully updated listing!");
  res.redirect(`/listings/${listing._id}`);
});


//DESTROY ROUTE to delete listing
const deleteListing = wrapAsync(async (req, res, next) => {
  const id = req.params.id;
  const deleteListing = await Listing.findByIdAndDelete(id);
  // console.log(deleteListing);
  req.flash("success", "Successfully deleted listing");
  res.redirect("/listings");
});


module.exports = {
  showAllListings,
  newListing,
  showListing,
  createListing,
  editListing,
  updateListing,
  deleteListing
};
