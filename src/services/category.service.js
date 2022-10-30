const { Category } = require('../models');

const createCategory = async (atributtesAndValues) => {
    const newCategory = await Category.create(atributtesAndValues);
    return newCategory;
};

const getAll = async () => {
    const allCategories = await Category.findAll();

    const categoriesList = allCategories.map((category) => ({
        id: category.dataValues.id,
        name: category.dataValues.name,
    }));

    return categoriesList;
};

const getCategoryById = async (id) => {
    const category = await Category.findByPk(id);
    if (!category) return null;
    return category.dataValues;
};

const testCategories = async (categoryIds) => {
    const isCategoriesOk = await Promise.all(
        categoryIds.map(async (id) => {
            const category = await getCategoryById(id);
            if (category) return true;
            if (!category) return false;
        }),
    );

    return (isCategoriesOk.every((category) => category));
};

module.exports = {
    getCategoryById,
    createCategory,
    getAll,
    testCategories,
};
