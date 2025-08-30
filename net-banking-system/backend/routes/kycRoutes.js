const express = require("express");
const router = express.Router();
const kycctrl = require('../controllers/kycController');

//insert
router.post('/',kycctrl.addKYC);
//view all
router.get('/',kycctrl.getallKYC);

module.exports = router;
