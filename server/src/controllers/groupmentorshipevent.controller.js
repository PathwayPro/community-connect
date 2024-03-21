const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { groupMentorshipEventService } = require('../services');

const createGroupMentorshipRequest = catchAsync(async (req, res) => {
    
    await groupMentorshipEventService.createGroupMentorshipRequest({ ...req.body });
    res.status(httpStatus.CREATED).send();
  });

  module.exports = {    
    createGroupMentorshipRequest,
  };
  