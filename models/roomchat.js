"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomChat extends Model {
    static associate(models) {}
  }
  RoomChat.init(
    {
      ChatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      RoomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "RoomChat",
    }
  );
  return RoomChat;
};
