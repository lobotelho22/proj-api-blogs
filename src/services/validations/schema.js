const joi = require('joi');

const loginSchema = joi.object({
    name: joi.string().required(),
    password: joi.string().required(),
});

module.exports = {
    loginSchema,
};
