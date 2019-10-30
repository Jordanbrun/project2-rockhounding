const express = require("express");
const router = express.Router();
const Post = require("../models/post.js");
const State = require("../models/state.js");
const User = require("../models/user.js");
const Rock = require("../models/rock.js");


router.get('/', async (req, res)=>{

  try {

    res.render('posts/index.ejs');
  } catch(err){
  	console.log(err);
    res.send(err);
  }
 });

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
            
});

// create
router.post('/', async (req, res) =>{
    try{
    //const foundUser = await User.findById(req.body.userId);
    const foundRock = await Rock.findById(req.body.rockId);
    const foundState = await State.findById(req.body.stateId);
    const newPost = await Post.create(req.body);

    //foundUser.posts.push(newPost);


    // look up .populate()

    await foundRock.posts.push(newPost);
    await foundState.posts.push(newPost);
    await newPost.states.push(foundState);
    await newPost.rock.push(foundRock);

    //await foundUser.save();
    await foundRock.save();
    await foundState.save();
    await newPost.save();

    res.redirect('/posts');

    } catch(err) {
    	console.log(err)
        res.send(err);
    }


});



//edit 
router.get('/:id/edit', async (req, res) =>{
   try { 
   	const allStates = await State.find({})
   	const allRocks = await State.find({})
   	const foundPost = await Post.findById(req.params.id);

   	res.render("posts/edit.ejs", {
   		post: foundPost,
   		states: allStates,
   		rocks: allRocks
   	})
   } catch(err){
   	console.log(err);
   	res.send(err);
   }

    });



//SHOW ROUTE FOR POSTS

router.get('/:id', async (req, res) =>{

	try {

		const foundPost = await Post.findById(req.params.id);
		res.render("posts/show.ejs", {
			posts: foundPost

		})
	} catch(err) {
		console.log(err);
		res.send(err)
	}

});



router.put('/:id', async (req, res)=>{
	try {

		const findUpdatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
		//const findFoundUser = User.findOne({'posts': req.params.id });
	
		// if(foundAuthor._id.toString() != req.body.authorId){

	
		//       foundAuthor.articles.remove(req.params.id);
		//       await foundAuthor.save();
		//       const newAuthor = await Author.findById(req.body.authorId);
		//       newAuthor.articles.push(updatedArticle);
		//       const savedNewAuthor = await newAuthor.save();
		      


		      res.redirect('/posts/' + req.params.id);


		// } else {
		//   console.log('hitting, else')
		//   res.redirect('/articles/' + req.params.id);

		// }
	} catch {
		console.log(err);
		res.send(err);
	}

});

module.exports = router;

