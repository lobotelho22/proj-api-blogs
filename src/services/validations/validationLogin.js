const schema = require('./schema');

const validateLogin = (email, password) => {
    const loginData = [email, password];

    loginData.forEach((loginItem) => {
        const { error } = schema.loginSchema.validate(loginItem);
        if (error) return { type: 'REQUIRED_FIELD', message: error.message };
    });

    return { type: null, message: '' };
};

module.exports = {
    validateLogin,
};
