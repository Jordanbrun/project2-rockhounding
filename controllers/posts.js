const express = require('express');
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");


router.post('/login', async (req, res) => {
  console.log("I am in the login route")
  
   try {
    const foundUser = await User.findOne({username: req.body.username});
    
    if(foundUser){

        
        if(bcrypt.compareSync(req.body.password, foundUser.password)){

          req.session.message = '';
          req.session.id = foundUser._id
          req.session.username = foundUser.username;
          req.session.logged   = true;
          console.log(req.session, "session from login route")
          res.redirect('/')
        } else {
            
           req.session.message = 'Username or password is incorrect';
           res.redirect('/');
        }
    } else {

      req.session.message = 'Username or password is incorrect';
      res.redirect('/');
      
   }
  } catch(err){
    res.send(err);
  }
});


router.get('/logout', (req, res) => {

  req.session.destroy((err) => {
    if(err){
      res.send(err);
    } else {
      res.redirect('/');
    }
  })

})


router.post("/registration", async (req, res) => {
  console.log("I am in the registration route")
  const password = req.body.password
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));


  const userDbEntry = {};


  userDbEntry.username = req.body.username;
  userDbEntry.password = passwordHash;
  userDbEntry.email = req.body.email;

  const createdUser = await User.create(userDbEntry);
  console.log(createdUser)

  req.session.username = createdUser.username;
  req.session.id = createdUser._id
  req.session.logged = true;
  console.log(req.session, "session from registration route")
  res.redirect("/");


})






module.exports = router;

