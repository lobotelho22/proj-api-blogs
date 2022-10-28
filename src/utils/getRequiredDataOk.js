const getRequiredDataOk = (bodyData, path) => {
    const requiredData = {
        loginRoute: ['email', 'password'],
    };
    let result = true;

    if (path === '/login') {
        const { loginRoute } = requiredData;
        result = loginRoute.every((item) => item in bodyData);
    }

    return result;
};

module.exports = getRequiredDataOk;
