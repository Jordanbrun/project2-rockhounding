const mongoose = require("mongoose");

const postsSchema = mongoose.Schema ({
	title: String,
	body: String,
	location: String,
	IMG: String,
	users: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "User"
	}],
	states: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "State"
	}],
	rocks: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "Rock"
	}]

});

const Post = mongoose.model("Post", postsSchema)
module.exports = Post;

