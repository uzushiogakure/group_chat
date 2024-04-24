if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
} //Install environment env

const { Server } = require("socket.io");
const { Chat } = require("./models");
const { createServer } = require("http");
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require("morgan")("dev"));

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "https://phase2-group.web.app",
  },
});

io.on("connection", (socket) => {
  socket.emit("message", "Welcome " + socket.id);

  socket.broadcast.emit("message", "A user has joined the chat");

  socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat");
  });

  socket.on("message:new", async (body) => {
    console.log("2");
    try {
      await Chat.create(body);
      io.emit("message:update", "updated");
      console.log("3");
    } catch (error) {
      throw error;
    }
  });
});

app.use("/", router);

app.use(errorHandler);

module.exports = httpServer;
