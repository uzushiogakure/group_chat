"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Chats", [
      {
        UserId: 1,
        RoomId: 1,
        content: "Halo Guys",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        RoomId: 1,
        content: "Halo Tatang",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        RoomId: 1,
        content: "Tugas Udah Tang",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 1,
        RoomId: 1,
        content: "Haduhh belum bosku",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        RoomId: 1,
        content: "awkwk kerjain laa tang",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
