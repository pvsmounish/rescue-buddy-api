const missingPersonModule = require('./missingPerson');
const announcementModule = require('./announcement');
const volunteerModule = require('./volunteer');
const reliefCampModule = require('./reliefCamp');
const donationModule = require('./donation');
const requestHelpModule = require('./requestHelp');

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
        requestHelps: async(_, params, context) => {
            return await requestHelpModule.getRequestHelps();
        },
    },
    Mutation: {
        createMissingPerson: async(_, params, context) => {
            return await missingPersonModule.createMissingPerson(params);
        },
        deleteMissingPerson: async(_, params, context) => {
            return await missingPersonModule.deleteMissingPerson(params.id);
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
        createRequestHelp: async(_, params, context) => {
            return await requestHelpModule.createRequestHelp(params);
        },
    },
};
