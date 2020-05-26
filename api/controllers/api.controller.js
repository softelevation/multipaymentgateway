
const User = require('../models/user');

module.exports = {
	defaultUrl: defaultUrl
};


function defaultUrl(req,res){
	// .select('email password _id')
	User.find()
			.exec().then(docs => {
			res.status(200).json({
				message: "all user",
				data: docs
			});
	}).catch(err => {
		res.status(500).json({
			error:err
		});
	});
	
}