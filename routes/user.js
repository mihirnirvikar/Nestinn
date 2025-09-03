const express = require("express");
const router = express.Router({ mergeParams: true });
const mongoose = require("mongoose");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

// route for signup form
router.get("/", (req, res) => {
  res.render("../views/auth/signup.ejs");
});

// route for signup logic
router.post(
  "/",
  wrapAsync(async (req, res) => {
    try {
      const { name, username, email, password } = req.body;
      const newUser = new User({ name, username, email });
      const registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.flash("success", "Successfully signed up! Please login.");
      res.redirect("/register/login");
    } catch (error) {
      req.flash("error", error.message);
      res.redirect("/register");
    }
  })
);

// login route
router.get("/login", (req, res) => {
  res.render("../views/auth/login.ejs");
});

// route for login logic
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/register/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", "Welcome to NestInn!");
    res.redirect("/listings");
  }
);

// logout route
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Successfully logged out!");
    res.redirect("/listings");
  });
});

module.exports = router;
