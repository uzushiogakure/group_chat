'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserRooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RoomId: {
        type: Sequelize.INTEGER,
        references: {
            model: "Rooms",
            key: "id",
          },
          allowNull: false,
          onDelete: "cascade",
          onUpdate: "cascade",
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
            model: "Users",
            key: "id",
          },
          allowNull: false,
          onDelete: "cascade",
          onUpdate: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserRooms');
  }
};