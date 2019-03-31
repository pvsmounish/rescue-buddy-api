const AnnouncementModel = require('../../models/announcement');

const getAnnouncements = async () => {
    return await AnnouncementModel.find({});
}

const createAnnouncement = async (announcement) => {
    let newAnnouncement = new AnnouncementModel(announcement);
    return await newAnnouncement.save();
}

module.exports = {
    getAnnouncements,
    createAnnouncement
}