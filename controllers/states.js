const express = require('express');
const router = express.Router();
const State = require('../models/state.js');
const Rock = require("../models/rock.js");
const Post = require("../models/post.js");
const Seed = require('../seed.js');



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

// If we dont want to go by name once we launch this live, we could run this to go by ID. 
// I think going by name looks better.. Especially in the URL

// router.get("/:id", async (req,res) => {
// 	try {
// 		const foundState = await State.findById(req.params.id);
// 		console.log(req.params.id)
// 		const allRocks = await Rock.find({state: foundState})
// 		res.render("states/show.ejs", {
// 			state: foundState,
// 			allRocks
// 		})

// 	} catch(err) {
// 		res.send(err)
// 	}
// })

//show state
router.get('/:name', async (req,res) => { // using name here for the show page. 
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


router.get("/:id/:idrocks", async (req,res) => {
	try {
		const foundState = await State.findOne(req.params.name);
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