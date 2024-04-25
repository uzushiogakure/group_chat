"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Rooms", [
      {
        title: "Grup Badai",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Niatnya Baik",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dark System",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rooms", null, {});
  },
};
