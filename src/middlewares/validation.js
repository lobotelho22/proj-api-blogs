const Schema = require('../services/validations/schema');
const Utils = require('../utils');

const validation = (req, res, next) => {
    const { path } = req.route;
    const selection = Utils.getSchemaToValidate(path);

    let result = { type: null, message: '' };

    const { error } = Schema[selection].validate(req.body);
        
    if (error) result = { type: 'REQUIRED_FIELD', message: error.message };

    console.log(result);
    if (result.type) { return res.status(400).json({ message: result.message }); }

    next();
};

module.exports = validation;
