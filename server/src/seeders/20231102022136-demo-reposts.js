// demo-reposts.js
const { Repost, Post } = require('../models');
const { generateReposts } = require('./utils/posts');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up() {
    // Getting posts for createing reposts
    const numberOfPosts = await Post.count();

    // Generating the reposts
    const reposts = generateReposts(numberOfPosts, 30); // 30 reposts
    await Repost.bulkCreate(reposts);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Reposts', null, {});
  },
};
