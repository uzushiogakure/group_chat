'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomChat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoomChat.init({
    ChatId: DataTypes.NUMBER,
    RoomId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'RoomChat',
  });
  return RoomChat;
};