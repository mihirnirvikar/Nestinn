const mongoose = require("mongoose");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

// SHOW SIGNUP FORM ROUTE
const showSignupForm = (req, res) => {
  res.render("auth/signup.ejs");
};

// SIGNUP LOGIC ROUTE
const signup = wrapAsync(async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const newUser = new User({ name, username, email });
    const registeredUser = await User.register(newUser, password);
    // console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to NestInn!");
      return res.redirect("/listings");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/register");
  }
});

// LOGIN LOGIC ROUTE
const login = (req, res) => {
  req.flash("success", "Welcome to NestInn!");
  res.redirect(res.locals.returnTo || "/listings");
};

// LOGOUT ROUTE
const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Successfully logged out!");
    res.redirect("/listings");
  });
};

module.exports = { showSignupForm, signup, login, logout };
