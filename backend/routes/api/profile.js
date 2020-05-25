const express = require('express');
const route = express.Router();

// @route       GET api/profile
// @desc        Test route
// @access      Public

router.get('/', () => res.send('Profile route'));

module.exports = router;