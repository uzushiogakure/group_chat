"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
      Chat.belongsToMany(models.Room, {
        through: models.RoomChat,
      });
      Chat.belongsTo(models.User);
    }
  }
  Chat.init(
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Chat",
    }
  );
  return Chat;
};
