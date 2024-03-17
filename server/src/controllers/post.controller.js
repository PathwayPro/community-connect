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
    content: req.body.content,
  });
  const post = await Post.findByPk(req.params.postId);
  post.repostsCount += 1;
  await post.save();
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
        attributes: ['id', 'repostDate', 'content'],
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
    originalAuthor: {
      name: `${post.author.firstName} ${post.author.lastName}`,
      position: post.author.UserProfile ? post.author.UserProfile.fieldOfExpertise : 'Unknown', // Make sure to handle null UserProfile if necessary
    },
    likesCount: post.likesCount,
    repostsCount: post.repostsCount,
    commentsCount: post.commentsCount,
    reposts: post.reposts.map((repost) => ({
      id: repost.id,
      repostDate: repost.repostDate,
      user: {
        name: `${repost.user.firstName} ${repost.user.lastName}`,
        position: repost.user.UserProfile ? repost.user.UserProfile.fieldOfExpertise : 'Unknown', // Handle null UserProfile if necessary
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
        attributes: ['id', 'repostDate', 'content'],
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
    likesCount: post.likesCount,
    repostsCount: post.repostsCount,
    commentsCount: post.commentsCount,
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
    likesCount: post.likesCount,
    repostsCount: post.repostsCount,
    commentsCount: post.commentsCount,
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
    likesCount: post.likesCount,
    repostsCount: post.repostsCount,
    commentsCount: post.commentsCount,
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
    attributes: ['id', 'repostDate', 'content'],
    order: [['id', 'ASC']],
  });

  // Format the posts and reposts
  const formattedOriginalPosts = originalPosts.map((post) => ({
    id: post.id,
    content: post.content,
    postDate: post.createdAt, // assuming you have a createdAt field
    likesCount: post.likesCount,
    repostsCount: post.repostsCount,
    commentsCount: post.commentsCount,
    originalAuthor: {
      name: `${post.author.firstName} ${post.author.lastName}`,
      position: post.author.UserProfile.fieldOfExpertise,
    },
    type: 'post', // to differentiate between posts and reposts
  }));

  const formattedReposts = reposts.map((repost) => ({
    id: repost.id,
    content: repost.originalPost.content,
    repostDate: repost.repostDate, // assuming you have a createdAt field
    postDate: repost.originalPost.createdAt,
    originalPostId: repost.originalPostId,
    repostAuthor: {
      name: `${repost.user.firstName} ${repost.user.lastName}`,
      position: repost.user.UserProfile.fieldOfExpertise,
      content: repost.content,
    },
    originalAuthor: {
      name: `${repost.originalPost.author.firstName} ${repost.originalPost.author.lastName}`,
      position: repost.originalPost.author.UserProfile.fieldOfExpertise,
    },
    type: 'repost', // to differentiate between posts and reposts
  }));

  // Combine posts and reposts
  const combinedPosts = [...formattedOriginalPosts, ...formattedReposts].sort((a, b) => b.id - a.id);

  res.send(combinedPosts);
});

const addLikeToPost = catchAsync(async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findByPk(postId);

  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }

  post.likesCount += 1;
  await post.save();

  res.status(httpStatus.OK).send({ likesCount: post.likesCount });
});

const deletePost = catchAsync(async (req, res) => {
  const { postId } = req.params;
  const deletedPost = await Post.destroy({
    where: {
      id: postId,
    },
  });
  if (!deletedPost) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  res.status(httpStatus.OK).send(deletedPost.toString());
});

module.exports = {
  createPost,
  createRepost,
  getPosts,
  getPostWithReposts,
  getPostById,
  getPostsByUserId,
  getPostsAndRepostsByUserId,
  addLikeToPost,
  deletePost,
};
