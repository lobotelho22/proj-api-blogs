const schema = require('./schema');

const validateLogin = (email, password) => {
    const loginData = [email, password];

    loginData.forEach((loginItem) => {
        const { error } = schema.loginSchema.validate(loginItem);
        if (error) return { type: 'REQUIRED_FIELD', message: error.message };
    });

    return { type: null, message: '' };
};

const validateUser = (displayName, email, password) => {
    const userData = [displayName, email, password];

    userData.forEach((data) => {
        const { error } = schema.userSchema.validate(data);
        if (error) return { type: 'REQUIRED_FIELD', message: error.message };
    });

    return { type: null, message: '' };
};

const validation = (dataObj, schemaChoosed) => {
    const schemasArr = ['loginSchema', 'userSchema'];
    const index = schemasArr.indexOf(schemaChoosed);
    const dataArray = Object.values(dataObj);
    const selection = schemasArr[index];

    dataArray.forEach((data) => {
        const { error } = schema[selection].validate(data);
        if (error) return { type: 'REQUIRED_FIELD', message: error.message };
    });

    return { type: null, message: '' };
};

module.exports = {
    validateLogin,
    validateUser,
    validation,
};
