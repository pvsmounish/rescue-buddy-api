const ReliefCampModel = require('../../models/reliefCamp');

const getReliefCamps = async () => {
    return await ReliefCampModel.find({});
}

const createReliefCamp = async (reliefCamp) => {
    let newReliefCamp = new ReliefCampModel(reliefCamp);
    return await newReliefCamp.save();
}

module.exports = {
    getReliefCamps,
    createReliefCamp
}