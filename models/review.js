const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;