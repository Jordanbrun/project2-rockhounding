const express = require("express");
const router = express.Router();
const State = require('../models/state.js');
const Rock = require("../models/rock.js")
const Post = require("../models/post.js")


router.get("/", async (req,res) => {
	try {
		const allRocks = await Rock.find({});
		console.log(allRocks);
		res.render("rocks/index.ejs", {
			rocks: allRocks
		});
	} catch(err) {
		console.log(err)
		res.send(err);
	}
})


router.get("/:id", async (req,res) => {
	try {
		const foundRock = await Rock.findById(req.params.id);
		const allPosts = await Post.find({rocks: foundRock});
		console.log(foundRock);
		console.log(allPosts);
		res.render("rocks/show.ejs", {
			rock: foundRock,
			posts: allPosts
		})

	} catch(err) {
		console.log(err)
		res.send(err)
	}
})


module.exports = router;

