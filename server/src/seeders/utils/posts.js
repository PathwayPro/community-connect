const generatePosts = (numberOfUsers, postsPerUser = 3) => {
  const posts = [];
  for (let userId = 1; userId <= numberOfUsers; userId += 1) {
    for (let i = 0; i < postsPerUser; i += 1) {
      posts.push({
        userId,
        content: `Post content ${i} by user ${userId} | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }
  return posts;
};

const generateReposts = (numberOfPosts, numberOfReposts = 30) => {
  const reposts = [];
  for (let i = 0; i < numberOfReposts; i += 1) {
    const numberOfUsers = 40;
    const userId = Math.floor(Math.random() * numberOfUsers) + 1;
    const originalPostId = Math.floor(Math.random() * numberOfPosts) + 1;

    reposts.push({
      userId,
      originalPostId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return reposts;
};

module.exports = {
  generatePosts,
  generateReposts,
};
