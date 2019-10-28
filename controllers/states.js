const express = require('express');
const router = express.Router();
const States = require('../models/state.js');


//index
router.get('/', async (req, res) => {
  res.render('states/index.ejs')
 });


//show route 1 - list of rocks

// show route 2 - will show the posts and the state

module.exports = router;