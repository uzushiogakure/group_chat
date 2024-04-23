"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      Room.belongsToMany(models.User, {
        through: models.UserRoom,
      });
      Room.belongsToMany(models.Chat, {
        through: models.RoomChat,
      });
    }
  }
  Room.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
