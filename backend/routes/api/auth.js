const express = require('express');
const route = express.Router();

// @route       GET api/auth
// @desc        Test route
// @access      Public

router.get('/', () => res.send('Auth route'));

module.exports = router;