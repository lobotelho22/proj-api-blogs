const { Category } = require('../models');

const createCategory = async (atributtesAndValues) => {
    const newCategory = await Category.create(atributtesAndValues);
    return newCategory;
  };

module.exports = {
    createCategory,
};
