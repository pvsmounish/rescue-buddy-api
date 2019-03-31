const missingPersonModule = require('./missingPerson');

module.exports = {
    Query: {
        missingPersons: async(_, params, context) => {
            return await missingPersonModule.getMissingPersons();
        },
        
    },
    Mutation: {
        createMissingPerson: async(_, params, context) => {
            return await missingPersonModule.createMissingPerson(params);
        },
    },
};
