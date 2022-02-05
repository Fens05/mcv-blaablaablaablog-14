const router = require('express').Router();
// Required files
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

// Routing
router.use('/users', userRoutes);
router.use('/posts', postRoutes);


// Export
module.exports = router;