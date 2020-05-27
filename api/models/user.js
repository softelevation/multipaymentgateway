var db = require("../db");
let model = {
    getUser: (cb) => {
        return db.query("SELECT * FROM users", cb)
    },
	getUserId: (id, cb) => {
        return db.query("SELECT * FROM users WHERE id=?", [id], cb)
    },
	addUser: (input, cb) => {
		let data = {
            first_name: input.first_name,
            last_name: input.last_name,
            email: input.email,
            phone: input.phone,
            amount: input.amount
        };
		return db.query("INSERT INTO users SET ?", [data], cb);
	}
}

module.exports = model;
	
	