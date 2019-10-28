const express = require("express");
const router = express.Router();
const Post = require("../models/post");


// INDEX FOR POSTS 
router.get("/", async (req, res) => {
	try {

	} catch (err) {
		res.send(err);
	}

});

// NEW FOR POSTS
router.get("/new", async (req, res) => {
	try {

	} catch(err) {
		res.send(err);
	}
});

// ADD A NEW POST

router.post ("/", async (req, res) => {
	try {

	} catch(err) {
		res.send(err);
	}

})

// SHOW FOR POSTS

router.get("/:id", async (req, res) => {
	try {

	} catch(err) {
		res.send(err);
	}
});

// EDIT A POST

router.get("/:id/edit", async (req, res) => {
	try {

	} catch(err) {
		res.send(err);
	}
});


// UPDATE AN EDITED POST

router.put("/:id", async (req, res) => {
	try {

	} catch(err) {
		res.send(err);
	}
});

// DELETE A POST

router.delete("/:id", async (req, res) => {
	try {

	} catch(err) {
		res.send(err);
	}
});

module.exports = router;
