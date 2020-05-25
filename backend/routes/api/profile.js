const express = require('express');
const router = express.Router();

// @route       GET api/profile
// @desc        Test route
// @access      Public

router.get('/', () => res.send('Profile route'));

module.exports = router;