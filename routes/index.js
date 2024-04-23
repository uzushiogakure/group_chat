const express = require("express");
const router = express.Router();

const { authentication } = require("../middleware/authentication");
const UserController = require("../controllers/userController");

router.get("/", (req, res) => {
  res.json("Hello World!");
});

router.post("/login", UserController.login);
router.post("/register", UserController.register);

// Need authentication
router.use(authentication);

module.exports = router;
