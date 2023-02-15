const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'the route is not yet defined!',
  });
};

exports.updateMe = (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (!req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for password updates. Please use /updateMyPassword.', 400));
  }
  // 2) Update user document

  res.status(200).json({
    status: 'success',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'the route is not yet defined!'
  });
};

exports.updateMe = (req, res, next) => {

};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'the route is not yet defined!',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'the route is not yet defined!'
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'the route is not yet defined!'
  });
};