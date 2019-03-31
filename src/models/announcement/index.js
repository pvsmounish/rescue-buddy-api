const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
    description: String,
    from: String,
    priority: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Announcement', announcementSchema);