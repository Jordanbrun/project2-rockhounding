const mongoose = require("mongoose");

const statesSchema = mongoose.Schema ({
	name: String,
	users: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "User"
	}],
	rocks: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "Rock"
	}],
	posts: [{
		type: mongoose.Schema.Types.ObjectID,
		ref: "Post"

	}]

});

const State = mongoose.model("State", statesSchema);
module.exports = State;