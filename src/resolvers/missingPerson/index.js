const MissingPersonModel = require('../../models/missingPerson');

const getMissingPersons = async () => {
    return await MissingPersonModel.find({});
}

const createMissingPerson = async (missingPerson) => {
    let newMissingPerson = new MissingPersonModel(missingPerson);
    return await newMissingPerson.save();
}

const deleteMissingPerson = async (id) => {
    try {
        await MissingPersonModel.findByIdAndDelete(id);
        return `Deleted ${id}`;
    } catch (error) {
        return 'Error';
    }
    
}

module.exports = {
    getMissingPersons,
    createMissingPerson,
    deleteMissingPerson
}