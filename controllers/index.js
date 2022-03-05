const router = require('express').Router();

const apiRoutes = require('./api/');
const postRoutes = require('./post-routes.js')
const homeRoutes = require('/home-routes.js');
const dashboardRoutes = ('/dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('api', apiRoutes);
router.use('/post', postRoutes);

module.exports = router;