'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RoomChats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ChatId: {
        type: Sequelize.INTEGER,
        references: {
            model: "Chats",
            key: "id",
          },
          allowNull: false,
          onDelete: "cascade",
          onUpdate: "cascade",
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
    await queryInterface.dropTable('RoomChats');
  }
};