const express = require("express");
const router = express.Router();


const errorHandler = require("../middleware/errorHandler")
const {authentication} = require("../middleware/authentication");
const UserController = require("../controllers/userController");

router.get("/", (req, res) => {
	res.json("Hello World!");
});

router.post("/login", UserController.login);
router.post("/google-login", UserController.googleLogin);
router.post("/register", UserController.register);


// Need authentication
router.use(authentication)


router.use(errorHandler);
module.exports = router;
