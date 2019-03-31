const missingPersonModule = require('./missingPerson');
const announcementModule = require('./announcement');
const volunteerModule = require('./volunteer');

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
    },
};
