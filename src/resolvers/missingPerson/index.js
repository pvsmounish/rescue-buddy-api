const MissingPersonModel = require('../../models/missingPerson');

const getMissingPersons = async () => {
    return await MissingPersonModel.find({});
}

const createMissingPerson = async (missingPerson) => {
    let newMissingPerson = new MissingPersonModel(missingPerson);
    return await newMissingPerson.save();
}

module.exports = {
    getMissingPersons,
    createMissingPerson
}