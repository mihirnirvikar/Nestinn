const express = require("express");
const router = express.Router();

const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });



const { validateListing, isLoggedIn, isOwner } = require("../middleware.js");
const {
  showAllListings,
  newListing,
  showListing,
  createListing,
  editListing,
  updateListing,
  deleteListing,
} = require("../controllers/listingController.js");

// show all listings route  READ ROUTE
router.get("/", showAllListings);

// create new listings route CREATE ROUTE
router.get("/new", isLoggedIn, newListing);

// Create show route of the listing   SHOW ROUTE
router.get("/:id", showListing);

// Create post route to store new listing data to DB   NEW CREATE ROUTE
router.post(
  "/",
  isLoggedIn,
  upload.single("image"),
  validateListing,
  createListing
);
// router.post("/", upload.single("image"), (req, res, next) => {
//   console.log(req.file);
//   res.send(req.file);
// })

// Create edit route for listing   EDIT ROUTE
router.get("/:id/edit", isLoggedIn, isOwner, editListing);

// Create Edited route to store new values to Db   UPDATE EDIT ROUTE
router.put("/:id", isLoggedIn, isOwner, upload.single("image"), updateListing);



// Create delete route to delete data from DB   DELETE ROUTE
router.delete("/:id", isLoggedIn, isOwner, deleteListing);

module.exports = router;
