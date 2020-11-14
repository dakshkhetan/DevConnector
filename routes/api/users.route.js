const express = require('express');
const router = express.Router();

const { validRegister } = require('../../middleware/valid');

const { registerUser } = require('../../controllers/users.controller');

router.post('/', validRegister, registerUser);

module.exports = router;
