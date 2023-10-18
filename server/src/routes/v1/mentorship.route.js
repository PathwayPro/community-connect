const express = require('express');
const multer = require('multer');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const mentorshipValidation = require('../../validations/mentorship.validation');
const mentorshipController = require('../../controllers/mentorship.controller');

const upload = multer();
const router = express.Router();

router
  .route('/mentees')
  .get(auth('manageMentorship'), validate(mentorshipValidation.getMenteesRequests), mentorshipController.getMenteesRequests)
  .post(
    auth('applyForMentorship'),
    upload.single('resume'),
    validate(mentorshipValidation.applyForMentorship),
    mentorshipController.createMenteeRequest
  );

router
  .route('/mentees/:id')
  .get(auth('manageMentorship'), mentorshipController.getMenteeRequest)
  .put(auth('manageMentorship'), mentorshipController.updateMenteeRequest);

router
  .route('/mentors')
  .get(auth('manageMentorship'), validate(mentorshipValidation.getMentorsRequests), mentorshipController.getMentorsRequests)
  .post(auth('becomeMentor'), validate(mentorshipValidation.becomeMentor), mentorshipController.createMentorRequest);

router
  .route('/mentors/:id')
  .get(auth('manageMentorship'), mentorshipController.getMentorRequest)
  .put(auth('manageMentorship'), mentorshipController.updateMentorRequest);

module.exports = router;
