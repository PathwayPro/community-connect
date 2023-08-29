const express = require('express');
const multer = require('multer');
const auth = require('../../middlewares/auth');
const fireBaseSavingController = require('../../controllers/fireBaseSaving.controller');

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.route('/firebase').post('/upload', auth('manageUsers'), upload.single('file'), fireBaseSavingController.uploadFile);

module.exports = router;
