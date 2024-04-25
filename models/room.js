"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      Room.belongsToMany(models.User, {
        through: models.Chat,
      });
      Room.hasMany(models.Chat);
    }
  }
  Room.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isNull: {
            msg: "Group Name is required",
          },
          notEmpty: {
            msg: "Group Name is required",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: "-",
      },
      imgUrl: {
        type: DataTypes.TEXT,
        defaultValue: "https://www.doccen.vn/icons/default-group-avatar.svg",
      },
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
