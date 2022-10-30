const Utils = require('../utils');

const errorMessage = (path) => {
    if (path === '/login') return 'Some required fields are missing';
    if (path === '/categories') return '"name" is required';
    if (path === '/post') return 'Some required fields are missing';
};

const authRequiredData = (req, res, next) => {
    const { path } = req.route;
    const bodyData = req.body;
    
    const dataNoteEmpty = Object.values(bodyData).every((data) => data);

    const requiredDataTest = Utils.getRequiredDataOk(bodyData, path);

    if (!requiredDataTest || !dataNoteEmpty) {
        return res.status(400).json({ message: errorMessage(path) });
    }

    next();
};

module.exports = authRequiredData;
