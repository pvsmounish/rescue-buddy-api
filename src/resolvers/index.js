const missingPersonModule = require('./missingPerson');
const announcementModule = require('./announcement');

module.exports = {
    Query: {
        missingPersons: async(_, params, context) => {
            return await missingPersonModule.getMissingPersons();
        },
        announcements: async(_, params, context) => {
            return await announcementModule.getAnnouncements();
        },
        
    },
    Mutation: {
        createMissingPerson: async(_, params, context) => {
            return await missingPersonModule.createMissingPerson(params);
        },
        createAnnouncement: async(_, params, context) => {
            return await announcementModule.createAnnouncement(params);
        },
    },
};
