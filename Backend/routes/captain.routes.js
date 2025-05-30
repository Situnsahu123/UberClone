const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const captainController = require("../controller/captain.controller")

router.post('/register',[
 body("email").isEmail().withMessage("invalid email format"),
 body("fullname.firstname").isLength({min: 3}).withMessage("fullname is required"),
 body("password").isLength({min: 8}).withMessage("password must be at least 8 characters long"),
 body("vehicle.color").isLength({min:3}).withMessage("vehicle information is required"),
 body("vehicle.plate").isLength({min:3}).withMessage("vehicle information is required"),
 body("vehicle.capacity").isInt({min:1}).withMessage("vehicle information is required"),
 body("vehicle.vehicleType").isIn(['car','motorcycle','auto']).withMessage("vehicle information is required"),

], captainController.registerCaptain)

module.exports = router;