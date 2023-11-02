// demo-reposts.js
const { Repost, Post } = require('../models');
const { generateReposts } = require('./utils/posts');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up() {
    // Получаем количество существующих постов для генерации репостов
    const numberOfPosts = await Post.count();

    // Генерируем репосты
    const reposts = generateReposts(numberOfPosts, 30); // 30 репостов
    await Repost.bulkCreate(reposts);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Reposts', null, {});
  },
};
