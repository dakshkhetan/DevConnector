const express = require('express');
const router = express.Router();

const usersRoute = require('./users.route');
const authRoute = require('./auth.route');
const profileRoute = require('./profile.route');
const postsRoute = require('./posts.route');

router.use('/users', usersRoute);
router.use('/auth', authRoute);
router.use('/profile', profileRoute);
router.use('/posts', postsRoute);

module.exports = router;
