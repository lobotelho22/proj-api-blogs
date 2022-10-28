const Utils = require('../utils');

const authRequiredData = (req, res, next) => {
    const { path } = req.route;
    const bodyData = req.body;
    
    const dataNoteEmpty = Object.values(bodyData).every((data) => data);

    const requiredDataTest = Utils.getRequiredDataOk(bodyData, path);

    if (!requiredDataTest || !dataNoteEmpty) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    next();
};

module.exports = authRequiredData;
