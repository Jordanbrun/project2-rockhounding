const express = require("express");
const router = express.Router();
const Post = require("../models/post.js");
const State = require("../models/state.js");
const User = require("../models/user.js");
const Rock = require("../models/rock.js");


//new route
router.get('/new', async (req, res) =>{
    try{

    	const allUsers = await User.find({});
    	const allRocks = await Rock.find({});
    	const allStates = await State.find({});
    	    res.render('posts/new.ejs', {
    	        users: allUsers,
    	        rocks: allRocks,
    	        states: allStates
    	    })
    } catch(err) {
    
    	console.log(err);
    	res.send(err);
    }    
            
})

// create
router.post('/', async (req, res) =>{
    try{
    const foundUser = await User.findById(req.body.userId);
    const foundRock = await Rock.findById(req.body.rockId);
    const foundState = await State.findById(req.body.stateId);
    const newPost = await Post.create(req.body);
    Promise.all([foundUser, foundRock, foundState, newPost]);
    foundUser.posts.push(newPost);
    foundRock.posts.push(newPost);
    foundState.posts.push(newPost);
    await foundUser.save();
    await foundRock.save();
    await foundState.save();
    res.redirect('/posts');

    } catch {
        res.send(err);
    }

})


// //edit 
// router.get('/:id/edit', (req, res) =>{
//     Post.findById(req.params.id, (err, foundPost) =>{
//         if(err){
//             res.send(err);
//         } else {
//             res.render('posts/edit.ejs', {
//                 post: foundPost
//                 })
//             }
//         })
//     })


// router.put('/:id', (req, res)=>{
//     Post.findByIdAndUpdate(req.params.id, req.body, (err, response) =>{
//         if(err){
//             res.send(err);
//         } else {
//             res.redirect('/posts');
//         }
        
//     })
// })

module.exports = router;
