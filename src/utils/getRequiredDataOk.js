const getRequiredDataOk = (bodyData, path) => {
    const requiredData = {
        loginRoute: ['email', 'password'],
        categoriesRoute: ['name'],
    };
    let result = true;

    if (path === '/login') {
        const { loginRoute } = requiredData;
        result = loginRoute.every((item) => item in bodyData);
    }

    if (path === '/categories') {
        const { categoriesRoute } = requiredData;
        result = categoriesRoute.every((item) => item in bodyData);
    }

    return result;
};

module.exports = getRequiredDataOk;
