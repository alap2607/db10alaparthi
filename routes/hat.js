var express = require("express");
const hat_controlers= require('../controllers/hat');
var router = express.Router();

/* GET home page. */
router.get('/', hat_controlers.hat_view_all_Page);

/* GET detail hat page */ 
router.get('/detail', hat_controlers.hat_view_one_Page);

/* GET create hat page */ 
router.get('/create', hat_controlers.hat_create_Page); 

/* GET create hat page */ 
router.get('/update', hat_controlers.hat_update_Page);

/* GET create hat page */ 
router.get('/delete', hat_controlers.hat_delete_Page);


module.exports = router;