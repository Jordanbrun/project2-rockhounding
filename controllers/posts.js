const express = require("express");
const router = express.Router();
const Post = require("../models/post");


//new route
router.get('/new', (req, res) =>{
	if(err){
		res.send(err);
	} else {
	
	const allUsers = Users.find({});
	const allRocks = Rocks.find({});
	const allStates = States.find({});
		res.render('posts/new.ejs', {
			allUsers: Users
			allRocks : Rocks
			allStates : States
		})
	}	
			
})

// create
router.post('/', async (req, res) =>{
	try{
	const foundUser = User.findById(req.body.userId);
	const foundRock = Rock.findById(req.body.rockId);
	const foundState = State.findById(req.body.stateId);
	const newPost = Post.create(req.body);
	const [foundUser, foundRock, foundState, newPost] = await
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


//edit 
router.get('/:id/edit', (req, res) =>{
	Post.findById(req.params.id, (err, foundPost) =>{
		if(err){
			res.send(err);
		} else {
			res.render('posts/edit.ejs', {
				post: foundPost
				})
			}
		})
	})


router.put('/:id', (req, res)=>{
	Post.findByIdAndUpdate(req.params.id, req.body, (err, response) =>{
		if(err){
			res.send(err);
		} else {
			res.redirect('/posts');
		}
		
	})
})



module.exports = router;


// new, post, edit, put, delete




//no order b/c no 