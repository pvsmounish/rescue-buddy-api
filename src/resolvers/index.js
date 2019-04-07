const missingPersonModule = require('./missingPerson');
const announcementModule = require('./announcement');
const volunteerModule = require('./volunteer');
const reliefCampModule = require('./reliefCamp');
const donationModule = require('.//donation');

module.exports = {
    Query: {
        missingPersons: async(_, params, context) => {
            return await missingPersonModule.getMissingPersons();
        },
        announcements: async(_, params, context) => {
            return await announcementModule.getAnnouncements();
        },
        volunteers: async(_, params, context) => {
            return await volunteerModule.getVolunteers();
        },
        reliefCamps: async(_, params, context) => {
            return await reliefCampModule.getReliefCamps();
        },
        donations: async(_, params, context) => {
            return await donationModule.getDonations();
        },
        
    },
    Mutation: {
        createMissingPerson: async(_, params, context) => {
            return await missingPersonModule.createMissingPerson(params);
        },
        createAnnouncement: async(_, params, context) => {
            return await announcementModule.createAnnouncement(params);
        },
        createVolunteer: async(_, params, context) => {
            return await volunteerModule.createVolunteer(params);
        },
        createReliefCamp: async(_, params, context) => {
            return await reliefCampModule.createReliefCamp(params);
        },
        createDonation: async(_, params, context) => {
            return await donationModule.createDonation(params);
        },
    },
};
