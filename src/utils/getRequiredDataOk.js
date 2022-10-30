const getRoute = (path) => {
    const requiredData = {
        loginRoute: ['email', 'password'],
        categoriesRoute: ['name'],
        postRoute: ['title', 'content', 'categoryIds'],
    };

    if (path === '/login') return requiredData.loginRoute;
    if (path === '/categories') return requiredData.categoriesRoute;
    if (path === '/post') return requiredData.postRoute;
};

const getRequiredDataOk = (bodyData, path) => {
    const route = getRoute(path);

    return route.every((item) => item in bodyData);
};

module.exports = getRequiredDataOk;
