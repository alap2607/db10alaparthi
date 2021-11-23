var express = require("express");
const hat_controlers= require('../controllers/hat');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', hat_controlers.hat_view_all_Page);

/* GET detail hat page */ 
router.get('/detail', hat_controlers.hat_view_one_Page);

/* GET create hat page */ 
router.get('/create', hat_controlers.hat_create_Page); 

/* GET update hat page */ 
router.get('/update', secured, hat_controlers.hat_update_Page);

/* GET delete hat page */ 
router.get('/delete', hat_controlers.hat_delete_Page);


module.exports = router;