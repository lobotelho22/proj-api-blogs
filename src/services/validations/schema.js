const joi = require('joi');

const loginSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
});

const userSchema = joi.object({
    displayName: joi.string().required().min(8),
    email: joi.string().required().email(),
    password: joi.string().required().min(6),
    image: joi.string(),
});

module.exports = {
    loginSchema,
    userSchema,
};
