const { BlogPost, PostCategory } = require('../models');

const createPost = async (postInfo, userId) => {
    const postData = await BlogPost.create(
        {
            title: postInfo.title,
            content: postInfo.content,
            userId,
            published: new Date(),
            updated: new Date(),
        },
    );

    postInfo.categoryIds.forEach(async (id) => {
        await PostCategory.create(
            {
                postId: postData.dataValues.id,
                categoryId: id,
            },
        );
    });

    return postData.dataValues;
};

module.exports = {
    createPost,
};