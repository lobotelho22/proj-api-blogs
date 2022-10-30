const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'posts_categories',
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,{
      as: 'blog_post',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  }

  return PostCategory;
};

module.exports = PostCategoryModel;