const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/', userController.getAll);
router.post('/', userController.create);

module.exports = router;
