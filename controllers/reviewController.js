const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");

// REVIEW ROUTE
const listingReview = wrapAsync(async (req, res, next) => {
  const id = req.params.id;
  const listing = await Listing.findById(id);
  const review = new Review(req.body);
  review.author = req.user._id;
  await review.save();
  listing.reviews.push(review._id);
  await listing.save();
  req.flash("success", "Successfully added your review");
  res.redirect(`/listings/${id}`);
});

// DELETE REVIEW ROUTE
const deleteReview = wrapAsync(async (req, res) => {
  const { id, reviewId } = req.params;
  await Review.findByIdAndDelete(reviewId);
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  req.flash("success", "Successfully deleted your review");
  res.redirect(`/listings/${id}`);
});

module.exports = { listingReview, deleteReview };
