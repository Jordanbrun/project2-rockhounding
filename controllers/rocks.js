const express = require("express");
const router = express.Router();
const Rock = require("../models/rock");


// INDEX FOR ROCKS

router.get("/", async (req, res) => {
	try {
		const foundRocks = await Rocks.find({})
		res.render("rocks/index.ejs", {
			rocks: foundRocks
		});
	} catch(err) {
		res.send(err);
	}
});

// NEW ROCK

router.get("/new", async (req, res) => {
	try {
		res.render("rocks/index.ejs");
	} catch(err) {
		res.send(err);
	}
});

//SHOW ROCK 

router.post("/", async (req, res) => {
	try {
		const createRock = await Rock.create(req.body);
	} catch(err) {
		res.send(err);
	}
});

// EDIT A ROCK

router.get("/:id/edit", async (req, res) => {
	try {
		Rock.findByID(req.params.id, (err, foundRock) => {
			res.render("rocks/edit.ejs", {
				rock: foundRock
			});
		});
	} catch(err) {
		res.send(err);
	}
});

// UPDATE AN EDITED ROCK

router.put("/:id", async (req, res) => {
	try {
		Rock.findByIdAnUpdate(req.params.id, req.body, {new:true}, (err, updatedRock) => {
			res.redirect("/rocks");
		});
	} catch(err) {
		res.send(err);
	}
});

// DELETE ROCKS

router.delete("/:id", async (req, res) => {
	try {

	} catch (err) {
		res.send(err);
	}
});


module.exports = router;

