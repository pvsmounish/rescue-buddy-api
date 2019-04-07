const RequestHelpModel = require('../../models/requestHelp');

const getRequestHelps = async () => {
    return await RequestHelpModel.find({});
}

const createRequestHelp = async (requestHelp) => {
    let newRequestHelp = new RequestHelpModel(requestHelp);
    return await newRequestHelp.save();
}

module.exports = {
    getRequestHelps,
    createRequestHelp
}