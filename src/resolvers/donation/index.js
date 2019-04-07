const DonationModel = require('../../models/donation');

const getDonations = async () => {
    return await DonationModel.find({});
}

const createDonation = async (donation) => {
    let newDonation = new DonationModel(donation);
    return await newDonation.save();
}

module.exports = {
    getDonations,
    createDonation
}