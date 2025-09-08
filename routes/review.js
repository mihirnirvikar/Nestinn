const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  validateReview,
  isLoggedIn,
  isReviewOwner,
} = require("../middleware.js");
const {
  listingReview,
  deleteReview,
} = require("../controllers/reviewController.js");

// Review Route
router.post("/", isLoggedIn, validateReview, listingReview);

// Delete Reviews Route
router.delete("/:reviewId", isLoggedIn, isReviewOwner, deleteReview);

module.exports = router;
