const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: { type: Number, required: true },
    titre: { type: String, required: true },
    date: { type: Date, required: true },
});

const book = mongoose.model('book', bookSchema);

exports.book = book;