const CategoryServer = require('../services/category.service');

const createCategory = async (req, res) => {
    try {
        const newCategory = await CategoryServer.createCategory(req.body);

        res.status(201).json(newCategory.dataValues);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Xiii, algo deu errado...' });
    }
};

module.exports = {
    createCategory,
};
