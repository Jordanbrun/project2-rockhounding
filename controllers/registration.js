const express = require("express");
const router = express.Router();
const Post = require("../models/user");

router.get('/', (req, res) => {
	res.render('registration/index.ejs');
});

module.exports = router;