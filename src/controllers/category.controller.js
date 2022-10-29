const CategoryService = require('../services/category.service');

const createCategory = async (req, res) => {
    try {
        const newCategory = await CategoryService.createCategory(req.body);

        res.status(201).json(newCategory.dataValues);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Xiii, algo deu errado...' });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const listCategories = await CategoryService.getAll();
        
        res.status(200).json(listCategories);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Xiii, algo deu errado...' });
    } 
};

module.exports = {
    createCategory,
    getAllCategories,
};
