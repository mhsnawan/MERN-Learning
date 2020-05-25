const express = require('express');
const route = express.Router();

// @route       GET api/users
// @desc        Test route
// @access      Public

router.get('/', () => res.send('User route'));

module.exports = router;