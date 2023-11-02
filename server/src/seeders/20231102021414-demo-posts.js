// demo-posts.js
const { Post, User } = require('../models');
const { generatePosts } = require('./utils/posts');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up() {
    // Предполагается, что вы хотите генерировать посты только для пользователей с подтвержденными email.
    // Поэтому сначала получим количество таких пользователей.
    const numberOfVerifiedUsers = await User.count({ where: { isEmailVerified: true } });

    // Теперь генерируем посты для этого количества пользователей.
    const posts = generatePosts(numberOfVerifiedUsers);
    await Post.bulkCreate(posts);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
