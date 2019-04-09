const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const missingPersonSchema = new Schema({
    name: String,
    description: String,
    age: Number,
    gender: String,
    photoUrl: String,
    missingDateTime: Date,
    guardianName: String,
    guardianMobile: String,
    city: String,
    address: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MissingPerson', missingPersonSchema);