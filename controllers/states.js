const express = require('express');
const router = express.Router();
const States = require('../models/state.js');


//index
router.get('/', async (req, res)=>{

  try {
  
  
      };
  } catch(err){
    res.send(err);
  });


// new route
router.get('/new', async (req, res)=>{

  try {
  
  
      };
  } catch(err){
    res.send(err);
  });



//edit
router.get('/:id/edit', async (req, res)=>{

  try {
  
  
      };
  } catch(err){
    res.send(err);
  });

router.post('/', async (req, res)=>{

  try {
  
  
      };
  } catch(err){
    res.send(err);
  });


router.delete('/:id', async (req, res)=>{

  try {
  
  
      };
  } catch(err){
    res.send(err);
  });

router.put('/:id', async (req, res)=>{

  try {
  
  
      };
  } catch(err){
    res.send(err);
  });





module.exports = router;