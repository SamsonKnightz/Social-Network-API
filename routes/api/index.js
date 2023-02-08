const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/courses', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;
