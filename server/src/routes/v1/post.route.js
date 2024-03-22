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
router.route('/:postId').delete(auth(), postController.deletePost);

router.route('/:postId').put(auth(), validate(postValidation.createPost), postController.updatePost);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: User management and retrieval
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a post
 *     description: Each verified user create other posts.
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: text
 *             example:
 *               content: This is my first post!
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Post'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   patch:
 *     summary: Update a post
 *     description: Logged in users can  update their own posts.
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: text
 *             example:
 *               content: This is my post updated content!
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Post'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *
 *   delete:
 *     summary: Delete a post
 *     description: Logged in users can delete only their posts.
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
