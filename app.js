require("dotenv").config(); //Install environment env
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./routes")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(require("morgan")("dev"))
app.use("/", router);

module.exports = app;



/*
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
npx sequelize-cli model:generate --name Chat --attributes context:text,UserId:number
npx sequelize-cli model:generate --name UserRoom --attributes RoomId:number,UserId:number
npx sequelize-cli model:generate --name Room --attributes title:string
npx sequelize-cli model:generate --name RoomChat --attributes ChatId:number,RoomId:number
*/