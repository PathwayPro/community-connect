const express = require('express');
const auth = require('../../middlewares/auth');
const utilController = require('../../controllers/util.controller');

const router = express.Router();

router.route('/countries').get(auth(), utilController.getCountries);
router.route('/provinces').get(auth(), utilController.getProvinces);
router.route('/interests').get(auth(), utilController.getInterests);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Utilities
 *   description: Utility operations related to countries and provinces
 */

/**
 * @swagger
 * /utils/countries:
 *   get:
 *     summary: Get a list of countries
 *     description: Fetch a list of all countries.
 *     tags: [Utilities]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   country:
 *                     type: string
 *                     example: "American Samoa"
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 * /utils/provinces:
 *   get:
 *     summary: Get a list of provinces
 *     description: Fetch a list of all provinces.
 *     tags: [Utilities]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   provinceAndTerritory:
 *                     type: string
 *                     example: "Alberta"
 *                   abbreviation:
 *                     type: string
 *                     example: "AB"
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
