"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "specialties",
      [
        {
          name: "Miễn dịch",
          image: "bac-si-tieu-hoa.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cơ xương khớp",
          image: "co-xuong-khop.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tim mạch",
          image: "kham-tim-mach.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mắt",
          image: "mat.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sức khỏe tinh thần",
          image: "200111-tao-hinh-ham-mat.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Y học cổ truyền",
          image: "y-hoc-co-truyen.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cột sống",
          image: "cot-song.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thần kinh",
          image: "than-kinh.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nha khoa",
          image: "182050-nha-khoa.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("specialties", null, {});
  },
};
