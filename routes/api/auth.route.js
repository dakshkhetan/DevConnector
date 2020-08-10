const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const { validLogin } = require('../../middleware/valid');

const { getUser, authenticateUser } = require('../../controllers/auth.controller');

router.get('/', auth, getUser);
router.post('/', validLogin, authenticateUser);

module.exports = router;
