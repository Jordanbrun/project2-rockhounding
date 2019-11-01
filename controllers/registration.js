const express = require("express");
const router = express.Router();
const Post = require("../models/user"); // calling users here so they can create and login to profiles


// this was a route created so we could have our users go to a new page to register
router.get('/', (req, res) => {
	res.render('registration/index.ejs');
});

module.exports = router;