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

module.exports = {
    createCategory,
    getAll,
};
