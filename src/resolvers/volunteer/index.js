const VolunteerModel = require('../../models/volunteer');

const getVolunteers = async () => {
    return await VolunteerModel.find({});
}

const createVolunteer = async (volunteer) => {
    let newVolunteer = new VolunteerModel(volunteer);
    return await newVolunteer.save();
}

module.exports = {
    getVolunteers,
    createVolunteer
}