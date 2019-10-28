const express = require('express');
const router = express.Router();
const State = require('../models/state.js');
const Rock = require("../models/rock.js")
const Post = require("../models/post.js")
const Seed = require('../seed.js')



router.get("/", async (req,res) => {
	try {
		const allStates = await State.find({});
		console.log(allStates);
		res.render("states/index.ejs", {
			states: allStates
		});
	} catch(err) {
		console.log(err)
		res.send(err);
	}
})


router.get("/:id", async (req,res) => {
	try {
		const foundState = await State.findById(req.params.id);
		const allRocks = await Rock.find({state: foundState})
		res.render("states/show.ejs", {
			state: foundState,
			allRocks
		})

	} catch(err) {
		res.send(err)
	}
})


router.get("/:id/:idrocks", async (req,res) => {
	try {
		const foundState = await State.findById(req.params.id);
		const foundRock = await Rock.findById(req.params.idrocks)
		const allPosts = await Post.find({states: foundState, rocks: foundRock})
		res.render("states/show2.ejs", {
			state: foundState,
			rock: foundRock,
			posts: allPosts
		})

	} catch(err) {
		res.send(err)
	}
})






module.exports = router;