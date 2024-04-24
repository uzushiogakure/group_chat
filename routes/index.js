const express = require("express");
const router = express.Router();

const { authentication } = require("../middlewares/authentication");
const UserController = require("../controllers/userController");
const RoomController = require("../controllers/roomController");

router.get("/", (req, res) => {
  res.json("Hello Girls!");
});

router.post("/login", UserController.login);
router.post("/register", UserController.register);

// Need authentication
// router.use(authentication);

router.post("/create-room", RoomController.createRoom);
router.get("/room", RoomController.getAllRoom);
router.get("/room/:id", RoomController.getChatRoom);

module.exports = router;
