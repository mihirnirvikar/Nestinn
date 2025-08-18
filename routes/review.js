const express = require("express");
const router = express.Router({ mergeParams: true });
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingJoiSchema, reviewJoiSchema } = require("../Schema.js");

// server side validation on review data
const validateReview = (req, res, next) => {
  const { error } = reviewJoiSchema.validate(req.body, { convert: true });
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    console.log(msg);
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

// Review Route 
router.post('/', validateReview,  wrapAsync(async (req, res, next) => {
  const id = req.params.id;
  const listing = await Listing.findById(id);
  const review = new Review(req.body);
  await review.save();
  listing.reviews.push(review._id);
  await listing.save();
  res.redirect(`/listings/${id}`);
}))

// Delete Reviews Route
router.delete('/:reviewId', wrapAsync(async(req, res) => {
  const { id, reviewId } = req.params;
  await Review.findByIdAndDelete(reviewId);
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  res.redirect(`/listings/${id}`);
}))



module.exports = router;
