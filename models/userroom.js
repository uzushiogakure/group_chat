"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRoom extends Model {
    static associate(models) {}
  }
  UserRoom.init(
    {
      RoomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UserRoom",
    }
  );
  return UserRoom;
};
