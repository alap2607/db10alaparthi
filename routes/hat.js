var express = require("express");
const hat_controlers= require('../controllers/hat');
var router = express.Router();

/* GET home page. */
router.get('/', hat_controlers.hat_view_all_Page);
module.exports = router;