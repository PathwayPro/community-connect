const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const postController = require('../../controllers/post.controller');
const postValidation = require('../../validations/post.validation');

const router = express.Router();

router.route('/').post(auth(), validate(postValidation.createPost), postController.createPost);

router.route('/:postId/reposts').post(auth(), validate(postValidation.createRepost), postController.createRepost);

router.route('/').get(auth(), postController.getPosts);

router.route('/:postId').get(auth(), postController.getPostWithReposts);

router.route('/:postId/like').post(auth(), postController.addLikeToPost);

// router.route('/:postId').get(auth(), postController.getPostById);

module.exports = router;
