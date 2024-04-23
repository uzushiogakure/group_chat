"use strict";

const { hashPassword } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Tatang",
        email: "iniTatang@mail.com",
        password: hashPassword("123456"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yogi",
        email: "iniYogi@mail.com",
        password: hashPassword("123456"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kemala",
        email: "iniKemal@mail.com",
        password: hashPassword("123456"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
