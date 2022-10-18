const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    userId: { type: Number, required: true },
    bookId: { type: Number, required: true },
    note: { type: String, required: true },
    date: { type: Date, required: true },
});

const review = mongoose.model('review', reviewSchema);

exports.review = review;