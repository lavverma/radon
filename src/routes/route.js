const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/auth")



router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middleware.tokenVerification, userController.getUserData)

router.put("/users/:userId", middleware.tokenVerification, userController.updateUser)

router.delete("/users/:userId",middleware.tokenVerification, userController.deleteData)

module.exports = router;