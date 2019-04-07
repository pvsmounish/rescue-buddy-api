const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestHelpSchema = new Schema({
    name: String,
    description: String,
    city: String,
    address: String,
    mobileNumber: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RequestHelp', requestHelpSchema);