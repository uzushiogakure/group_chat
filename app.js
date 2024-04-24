require("dotenv").config(); //Install environment env
const { Server } = require('socket.io')
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000
const router = require("./routes")
const httpServer = createServer(app)
const io = new Server(server) // link deploynya

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(require("morgan")("dev"))

io.on('connection', (socket) => {
    console.log('a user connected');
  });

app.use("/", router);

httpServer.listen(port, () => {
    console.log(`server running at https://127.0.0.1/${port}`);
  });

module.exports = app;



/*
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
npx sequelize-cli model:generate --name Chat --attributes context:text,UserId:number
npx sequelize-cli model:generate --name UserRoom --attributes RoomId:number,UserId:number
npx sequelize-cli model:generate --name Room --attributes title:string
npx sequelize-cli model:generate --name RoomChat --attributes ChatId:number,RoomId:number
*/