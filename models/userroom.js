'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserRoom.belongsTo(models.User)
      UserRoom.belongsTo(models.Room)
    }
  }
  UserRoom.init({
    RoomId: DataTypes.NUMBER,
    UserId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'UserRoom',
  });
  return UserRoom;
};