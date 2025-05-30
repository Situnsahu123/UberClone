const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controller/user.controller");
const authMiddleware = require('../middleware/auth.middleware')

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("invalid email format"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("user name shoud be at least 3 characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password shoud be at least 10 characters"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  (req, res, next) => [
    body("email").isEmail().withMessage("invalid email"),
    body("password").isLength({ min: 6 }).withMessage(" invalid password"),
  ],
  userController.loginUser
);

router.get("/profile",authMiddleware.authUser, userController.getUserProfile)

router.get('/logout',authMiddleware.authUser, userController.logoutUser)
module.exports = router;
