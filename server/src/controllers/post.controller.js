const httpStatus = require('http-status');
const { Post, Repost, User, UserProfile } = require('../models'); // Импорт моделей
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const createPost = catchAsync(async (req, res) => {
  const post = await Post.create({ ...req.body, userId: req.user.id });
  res.status(httpStatus.CREATED).send(post);
});

const createRepost = catchAsync(async (req, res) => {
  const repost = await Repost.create({
    originalPostId: req.params.postId,
    userId: req.user.id,
  });
  res.status(httpStatus.CREATED).send(repost);
});

const getPosts = catchAsync(async (req, res) => {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
        as: 'author',
        include: [
          {
            model: UserProfile,
            attributes: ['fieldOfExpertise'],
          },
        ],
        attributes: ['firstName', 'lastName'],
      },
      {
        model: Repost,
        as: 'reposts',
        include: [
          {
            model: User,
            as: 'user',
            include: [
              {
                model: UserProfile,
                attributes: ['fieldOfExpertise'],
              },
            ],
            attributes: ['firstName', 'lastName'],
          },
        ],
      },
    ],
    order: [
      // ['postDate', 'DESC'],
      // [{ model: Repost, as: 'reposts' }, 'repostDate', 'DESC'],
      ['id', 'ASC'],
      [{ model: Repost, as: 'reposts' }, 'id', 'ASC'],
    ],
  });

  const postsFormatted = posts.map((post) => ({
    id: post.id,
    content: post.content,
    postDate: post.postDate,
    author: {
      name: `${post.author.firstName} ${post.author.lastName}`,
      position: post.author.UserProfile.fieldOfExpertise, // Make sure to handle null UserProfile if necessary
    },
    reposts: post.reposts.map((repost) => ({
      id: repost.id,
      repostDate: repost.repostDate,
      user: {
        name: `${repost.user.firstName} ${repost.user.lastName}`,
        position: repost.user.UserProfile.fieldOfExpertise, // Handle null UserProfile if necessary
      },
    })),
  }));

  res.send(postsFormatted);
});

const getPostWithReposts = catchAsync(async (req, res) => {
  const post = await Post.findByPk(req.params.postId, {
    include: [
      {
        model: User,
        as: 'author',
        include: [
          {
            model: UserProfile,
            attributes: ['fieldOfExpertise'],
          },
        ],
        attributes: ['firstName', 'lastName'],
      },
      {
        model: Repost,
        as: 'reposts',
        include: [
          {
            model: User,
            as: 'user',
            include: [
              {
                model: UserProfile,
                attributes: ['fieldOfExpertise'],
              },
            ],
            attributes: ['firstName', 'lastName'],
          },
        ],
      },
    ],
  });

  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }

  // Format the post and reposts
  const formattedPost = {
    id: post.id,
    content: post.content,
    postDate: post.postDate,
    author: {
      name: `${post.author.firstName} ${post.author.lastName}`,
      position: post.author.UserProfile.fieldOfExpertise,
    },
    reposts: post.reposts.map((repost) => ({
      id: repost.id,
      repostDate: repost.repostDate,
      user: {
        name: `${repost.user.firstName} ${repost.user.lastName}`,
        position: repost.user.UserProfile.fieldOfExpertise,
      },
    })),
  };

  res.send(formattedPost);
});

const getPostById = catchAsync(async (req, res) => {
  const postId = req.params.id; // or however you get the post ID from the request
  const post = await Post.findByPk(postId, {
    include: [
      {
        model: User,
        as: 'author',
        include: [
          {
            model: UserProfile,
            attributes: ['fieldOfExpertise'],
          },
        ],
        attributes: ['firstName', 'lastName'],
      },
    ],
  });

  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }

  const postFormatted = {
    id: post.id,
    name: `${post.author.firstName} ${post.author.lastName}`,
    position: post.author.UserProfile.fieldOfExpertise,
    date: post.postDate,
    content: post.content,
  };

  res.send(postFormatted);
});

const getPostsByUserId = catchAsync(async (req, res) => {
  const { userId } = req.params; // Get the user ID from the request parameters
  const userPosts = await Post.findAll({
    where: { userId }, // Filter posts by the user ID
    include: [
      {
        model: User,
        as: 'author',
        include: [
          {
            model: UserProfile,
            attributes: ['fieldOfExpertise'],
          },
        ],
        attributes: ['firstName', 'lastName'],
      },
      {
        model: Repost,
        as: 'reposts',
        include: [
          {
            model: User,
            as: 'user',
            include: [
              {
                model: UserProfile,
                attributes: ['fieldOfExpertise'],
              },
            ],
            attributes: ['firstName', 'lastName'],
          },
        ],
      },
    ],
    order: [
      ['id', 'ASC'],
      [{ model: Repost, as: 'reposts' }, 'id', 'ASC'],
    ],
  });

  const postsFormatted = userPosts.map((post) => ({
    id: post.id,
    content: post.content,
    postDate: post.postDate,
    author: {
      name: `${post.author.firstName} ${post.author.lastName}`,
      position: post.author.UserProfile.fieldOfExpertise,
    },
    reposts: post.reposts.map((repost) => ({
      id: repost.id,
      repostDate: repost.repostDate,
      user: {
        name: `${repost.user.firstName} ${repost.user.lastName}`,
        position: repost.user.UserProfile.fieldOfExpertise,
      },
    })),
  }));

  res.send(postsFormatted);
});

const getPostsAndRepostsByUserId = catchAsync(async (req, res) => {
  const { userId } = req.params; // Get the user ID from the request parameters

  // Get original posts by the user
  const originalPosts = await Post.findAll({
    where: { userId },
    include: [
      {
        model: User,
        as: 'author',
        include: [
          {
            model: UserProfile,
            attributes: ['fieldOfExpertise'],
          },
        ],
        attributes: ['firstName', 'lastName'],
      },
    ],
    order: [['id', 'ASC']],
  });

  // Get reposts by the user
  const reposts = await Repost.findAll({
    where: { userId },
    include: [
      {
        model: Post,
        as: 'originalPost',
        include: [
          {
            model: User,
            as: 'author',
            include: [
              {
                model: UserProfile,
                attributes: ['fieldOfExpertise'],
              },
            ],
            attributes: ['firstName', 'lastName'],
          },
        ],
      },
      {
        model: User,
        as: 'user',
        attributes: ['firstName', 'lastName'],
        include: [
          {
            model: UserProfile,
            attributes: ['fieldOfExpertise'],
          },
        ],
      },
    ],
    order: [['id', 'ASC']],
  });

  // Format the posts and reposts
  const formattedOriginalPosts = originalPosts.map((post) => ({
    id: post.id,
    content: post.content,
    date: post.createdAt, // assuming you have a createdAt field
    author: {
      name: `${post.author.firstName} ${post.author.lastName}`,
      position: post.author.UserProfile.fieldOfExpertise,
    },
    type: 'post', // to differentiate between posts and reposts
  }));

  const formattedReposts = reposts.map((repost) => ({
    id: repost.id,
    content: repost.originalPost.content,
    date: repost.createdAt, // assuming you have a createdAt field
    originalPostId: repost.originalPostId,
    author: {
      name: `${repost.user.firstName} ${repost.user.lastName}`,
      position: repost.user.UserProfile.fieldOfExpertise,
    },
    type: 'repost', // to differentiate between posts and reposts
  }));

  // Combine posts and reposts
  const combinedPosts = [...formattedOriginalPosts, ...formattedReposts].sort((a, b) => a.id - b.id);

  res.send(combinedPosts);
});

module.exports = {
  createPost,
  createRepost,
  getPosts,
  getPostWithReposts,
  getPostById,
  getPostsByUserId,
  getPostsAndRepostsByUserId,
};
