const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const utilRoute = require('./util.route');
const docsRoute = require('./docs.route');
const mentorshipRoute = require('./mentorship.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/mentorship',
    route: mentorshipRoute,
  },
  {
    path: '/utils',
    route: utilRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
