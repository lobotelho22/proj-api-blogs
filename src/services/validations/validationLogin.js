const schema = require('./schema');

const validateLogin = (name, password) => {
    const loginData = [name, password];

    loginData.forEach((loginItem) => {
        const { error } = schema.loginSchema.validate(loginItem);
        if (error) return { type: 'REQUIRED_FIELD', message: error.message };
    });

    return { type: null, message: '' };
};

module.exports = {
    validateLogin,
};
