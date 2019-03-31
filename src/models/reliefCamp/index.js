const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reliefCampSchema = new Schema({
    campName: String,
    latitude: String,
    longitude: String,
    address: String,
    mobileNumber: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ReliefCamp', reliefCampSchema);