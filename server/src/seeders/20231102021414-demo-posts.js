// demo-posts.js
const { Post, User } = require('../models');
const { generatePosts } = require('./utils/posts');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up() {
    // Generate posts only for verified users
    // First of all, getting the verified users
    const numberOfVerifiedUsers = await User.count({ where: { isEmailVerified: true } });

    // Now generating the posts for it
    const posts = generatePosts(numberOfVerifiedUsers);
    await Post.bulkCreate(posts);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
