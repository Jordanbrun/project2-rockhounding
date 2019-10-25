const express = require("express");
const router = express.Router();
const Rock = require("..models/rock");


// INDEX FOR ROCKS

router.get("/", async (req, res) => {
	try {

	} catch(err) {
		res.send(err);
	}
});

// NEW ROCK

router.get("/new", async (req, res) => {
	try {

	} catch(err) {
		res.send(err);
	}
});

//SHOW ROCK 

router.post("/", async (req, res) => {
	try {

	} catch(err) {
		res.send(err);
	}
});

// EDIT A ROCK

router.get("/:id/edit", async (req, res) => {
	try {

	} catch(err) {
		res.send(err);
	}
})

// UPDATE AN EDITED ROCK

router.put("/:id", async (req, res) => {
	try {

	} catch(err) {
		res.send(err);
	}
});

router.delete("/:id", async (req, res) => {
	try {

	} catch (err) {
		res.send(err);
	}
});

//GITHUB IS AWFUL AND I WANT TO CRY

