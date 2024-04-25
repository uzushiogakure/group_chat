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
      {
        UserId: 2,
        RoomId: 3,
        content: "Humbala humbala",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        RoomId: 3,
        content: "Humbalaa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 1,
        RoomId: 3,
        content: "Humbalaaa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        RoomId: 3,
        content: "HumbaHumba",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        RoomId: 2,
        content: "Kamu Siapa?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 1,
        RoomId: 2,
        content: "Kamu Seperti Jelly",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        RoomId: 2,
        content: "Jelly ku My Jelly",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Chats", null, {});
  },
};
