const express = require("express");
const router = express.Router();

const RegisterController = require("../Controller/registercontroller");
const {registervalid,userlogin}=require("../Validation/uservalidation");



router.post("/register",registervalid,RegisterController.register)
router.post("/login",userlogin,RegisterController.login)


module.exports = router;