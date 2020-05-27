var express = require('express');
var router = express.Router();

apiController = require('../controllers/api.controller');


router.get('/',apiController.defaultUrl);
router.post('/',apiController.postUser);




module.exports = router;
