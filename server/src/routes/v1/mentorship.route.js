const express = require('express');
const multer = require('multer');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const mentorshipValidation = require('../../validations/mentorship.validation');
const mentorshipController = require('../../controllers/mentorship.controller');

const upload = multer();
const router = express.Router();

router
  .route('/apply')
  .post(
    auth('applyForMentorship'),
    upload.single('resume'),
    validate(mentorshipValidation.applyForMentorship),
    mentorshipController.createMenteeRequest
  );

router
  .route('/becomeMentor')
  .post(auth('becomeMentor'), validate(mentorshipValidation.becomeMentor), mentorshipController.createMentorRequest);

module.exports = router;
