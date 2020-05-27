
const model = require('../models/user');
// const db = require('../db');

module.exports = {
	defaultUrl: defaultUrl,
	postUser: postUser
};


function defaultUrl(req,res){
	var inputData = {
			first_name: 'adminpp',
            last_name: 'adminpp',
            email: 'adminpp@gmail.com',
            phone: '4444444',
            amount: '12',
	}
	model.addUser(inputData , function(err, result) {
        if(err) {
            res.json(err)
        } else {
			let id = result.insertId;
			model.getUserId(id , function(errs, results) {
				if(err) {
					res.json(err)
				}else{
					res.json(results);
				}
			});            
        }
    });
}

function postUser(req,res){
	model.addUser(req.body , function(err, result) {
        if(err) {
            res.json(err)
        } else {
			let id = result.insertId;
			model.getUserId(id , function(errs, results) {
				if(err) {
					res.json(err)
				}else{
					res.json(results);
				}
			});            
        }
    });
}