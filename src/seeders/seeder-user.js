"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      // email: DataTypes.STRING,
      // password: DataTypes.STRING,
      // firstName: DataTypes.STRING,
      // lastName: DataTypes.STRING,
      // address: DataTypes.STRING,
      // gender: DataTypes.BOOLEAN,
      // roleid: DataTypes.STRING,
      {
        email: "admin@gmail.com",
        password: "123456",
        firstName: "Trinh ",
        lastName: "Chung",
        address: "Bac Ninh",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
