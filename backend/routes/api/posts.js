const express = require('express');
const route = express.Router();

// @route       GET api/posts
// @desc        Test route
// @access      Public

router.get('/', () => res.send('Post route'));

module.exports = router;