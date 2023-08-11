/*
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    hobbies: [{ name: String, days: [String], frequency: Number }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;

Scrapped this at current level, will come back when back end properly implemented
*/
