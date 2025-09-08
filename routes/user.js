const express = require("express");
const router = express.Router({ mergeParams: true });
const mongoose = require("mongoose");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { isLoggedIn, returnToUrl } = require("../middleware");
const {
  showSignupForm,
  signup,
  login,
  logout,
} = require("../controllers/userController");

// route for signup form
router.get("/", showSignupForm);

// route for signup logic
router.post("/", signup);

// login route
router.get("/login", (req, res) => {
  res.render("../views/auth/login.ejs");
});

// route for login logic
router.post(
  "/login",
  returnToUrl,
  passport.authenticate("local", {
    failureRedirect: "/register/login",
    failureFlash: true,
  }),
  login
);

// logout route
router.get("/logout", logout);

module.exports = router;
