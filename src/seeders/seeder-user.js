"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "doctor1@gmail.com",
        password:
          "$2a$10$GOKZDa1erH0jT3caNHw9xeIUmw7JlDNQhG507gJZNXI2vndxVvc6u",
        firstName: "Nhất",
        lastName: "Nguyễn",
        address: "Bac Ninh",
        gender: 1,
        roleId: "R2",
        image: "UET_logo.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "doctor2@gmail.com",
        password:
          "$2a$10$GOKZDa1erH0jT3caNHw9xeIUmw7JlDNQhG507gJZNXI2vndxVvc6u",
        firstName: "Nhị ",
        lastName: "Nguyễn",
        address: "Bac Ninh",
        gender: 1,
        image: "UET_logo.png",
        roleId: "R2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "doctor3@gmail.com",
        password:
          "$2a$10$GOKZDa1erH0jT3caNHw9xeIUmw7JlDNQhG507gJZNXI2vndxVvc6u",
        firstName: "Tam",
        lastName: "Nguyễn ",
        address: "Bac Ninh",
        gender: 1,
        image: "UET_logo.png",
        roleId: "R2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "doctor4@gmail.com",
        password:
          "$2a$10$GOKZDa1erH0jT3caNHw9xeIUmw7JlDNQhG507gJZNXI2vndxVvc6u",
        firstName: "Tứ",
        lastName: "Nguyễn",
        address: "Bac Ninh",
        gender: 1,
        image: "UET_logo.png",
        roleId: "R2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "doctor5@gmail.com",
        password:
          "$2a$10$GOKZDa1erH0jT3caNHw9xeIUmw7JlDNQhG507gJZNXI2vndxVvc6u",
        firstName: "Ngũ",
        lastName: "Nguyễn",
        address: "Bac Ninh",
        gender: 1,
        image: "UET_logo.png",
        roleId: "R2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "doctor6@gmail.com",
        password:
          "$2a$10$GOKZDa1erH0jT3caNHw9xeIUmw7JlDNQhG507gJZNXI2vndxVvc6u",
        firstName: "Lục",
        lastName: "Nguyễn",
        address: "Bac Ninh",
        gender: 1,
        image: "UET_logo.png",
        roleId: "R2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "doctor7@gmail.com",
        password:
          "$2a$10$GOKZDa1erH0jT3caNHw9xeIUmw7JlDNQhG507gJZNXI2vndxVvc6u",
        firstName: "Thất",
        lastName: "Nguyễn",
        address: "Bac Ninh",
        gender: 1,
        image: "UET_logo.png",
        roleId: "R2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "doctor8@gmail.com",
        password:
          "$2a$10$GOKZDa1erH0jT3caNHw9xeIUmw7JlDNQhG507gJZNXI2vndxVvc6u",
        firstName: "Bát",
        lastName: "Nguyễn ",
        address: "Bac Ninh",
        gender: 1,
        image: "UET_logo.png",
        roleId: "R2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "admin@gmail.com",
        password:
          "$2a$10$GOKZDa1erH0jT3caNHw9xeIUmw7JlDNQhG507gJZNXI2vndxVvc6u",
        firstName: "Trinh ",
        lastName: "Chung",
        address: "Bac Ninh",
        gender: 1,
        image: "fit-logo.jpg",
        roleId: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "patient@gmail.com",
        password:
          "$2a$10$GOKZDa1erH0jT3caNHw9xeIUmw7JlDNQhG507gJZNXI2vndxVvc6u",
        firstName: "Benh ",
        lastName: "Nhan",
        address: "Bac Ninh",
        gender: 1,
        roleId: "R3",
        image: "VNU.logo.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
