const express = require('express');
const router = express.Router();
const States = require('../models/state.js');
const Rock = require("../models/rock");


//index
router.get('/', async (req, res) => {
  res.render('states/index.ejs');
 });


//show route 1 - list of rocks - after clicking it on state

router.get('/:id', (req, res) => {
	Rock.findById(req.params.id, (err, founndRock) => {
		if (err){
			res.send(err);
		} else {
			res.render('states/show.ejs')
		}
	})
})

// show route 2 - will show the posts and the state



module.exports = router;