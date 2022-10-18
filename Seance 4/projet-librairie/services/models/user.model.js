const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: Number, required: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
});

const user = mongoose.model('review', userSchema);

exports.user = user;