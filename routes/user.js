const express = require("express");
const router = express.Router({ mergeParams: true });
const mongoose = require("mongoose");


// route for signup form
router.get("/", (req, res) => {
    res.render("../views/auth/signup.ejs");
})

// route for signup logic
router.post("/", async(req, res) => {
    const { name, username, email, password } = req.body;
    
})

module.exports = router;
