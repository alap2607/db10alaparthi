  
var express = require('express');
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

/* GET bakerys */
router.get('/', hat_controlers.hat_view_all_Page );
module.exports = router;

/* GET detail bakery page */
router.get('/detail', hat_controlers.hat_view_one_Page);

/* GET create bakery page */
router.get('/create',secured, hat_controlers.hat_create_Page);

/* GET create update page */
router.get('/update',secured, hat_controlers.hat_update_Page);

/* GET create bakery page */
router.get('/delete',secured, hat_controlers.hat_delete_Page);