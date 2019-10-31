const express = require('express');
const router = express.Router();
const State = require('../models/state.js');
const Rock = require("../models/rock.js");
const Post = require("../models/post.js");
const Seed = require('../seed.js');


//INDEX 
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

//SHOW ROUTE
router.get('/:name', async (req,res) => {  
	try {
		const foundState = await State.findOne({name: req.params.name});
		const allRocks = await Rock.find({states: foundState});
		console.log(foundState.rocks)
		console.log(allRocks);
		res.render('states/show.ejs', {
			state: foundState,
			rocks: allRocks
		})
	}
	catch(err) {
		res.send(err);
	}
});

//SHOW2 ROUTE
router.get("/:name/:idrocks", async (req,res) => {
	try {
		const foundState = await State.findOne({name: req.params.name});
		console.log(foundState)
		const foundRock = await Rock.findById(req.params.idrocks);
		console.log(foundRock);
		const posts = await Post.find({});
		console.log(posts)
		const allPosts = await Post.find({states: foundState, rocks: foundRock})
		console.log(allPosts);
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