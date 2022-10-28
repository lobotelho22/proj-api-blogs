const getSchemaToValidate = (path) => {
    const schemasArr = ['loginSchema', 'userSchema'];
    switch (path) {
        case '/login':
            return schemasArr[0];
        case '/user':
            return schemasArr[1];
        default:
            return null;
    }
};

module.exports = getSchemaToValidate;