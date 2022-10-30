const CategoryService = require('../services/category.service');
const BlogPostService = require('../services/blogpost.service');

const createBlogPost = async (req, res) => {
  try {
    const { categoryIds } = req.body;
    const { id: userId } = req.user.message;
    const errorMessage = 'one or more "categoryIds" not found';

    const categoriesAreOk = await CategoryService.testCategories(categoryIds);
    if (!categoriesAreOk) return res.status(400).json({ message: errorMessage });

    const post = await BlogPostService.createPost(req.body, userId);

    return res.status(201).json(post);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Xiii, algo deu errado...' });
  }
};

module.exports = {
  createBlogPost,
};
