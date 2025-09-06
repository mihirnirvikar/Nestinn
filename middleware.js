const Listing = require("./models/listing");
const Review = require("./models/review")
const isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        // store the url they are requesting
        req.session.returnTo = req.originalUrl;
        req.flash("error", "You must be logged in first!");
        return res.redirect("/register/login");
    }
    next();
}

const returnToUrl = (req, res, next) => {
    if(req.session.returnTo){
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}

const isOwner = async(req, res, next) => {
    const { id } = req.params;
    const listingOwner = await Listing.findById(id);
    if(!listingOwner.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "You are not authorized to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

const isReviewOwner = async(req, res, next) => {
    const { reviewId } = req.params;
    const reviewOwner = await Review.findById(reviewId);
    if(!reviewOwner.author._id.equals(req.user._id)){
        req.flash("error", "You are not authorized to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();

}

module.exports = { isLoggedIn, returnToUrl, isOwner, isReviewOwner };