"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "clinics",
      [
        {
          name: "Hệ thống Y tế Thu Cúc TCI",
          address:
            "Cơ sở Thụy Khuê: 286 Thụy Khuê, Tây Hồ, Hà Nội Cơ sở Trần Duy Hưng: 216 Trần Duy Hưng, Cầu Giấy, Hà Nội Cơ sở Đại Từ: 32 Đại Từ, Hoàng Mai, Hà Nội Cơ sở Nguyễn Trãi: 136 Nguyễn Trãi, Thanh Xuân, Hà Nội",
          image: "benh-vien-thu-cuc-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bệnh viện Chợ Rẫy",
          address: "201B Nguyễn Chí Thanh, Phường 12, Quận 5, Hồ Chí Minh",
          image: "benh-vien-cho-ray.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bệnh Viện Đa Khoa Quốc Tế Vinmec Times City",
          address: "Số 458 Minh Khai - Hai Bà Trưng - Hà Nội",
          image: "153155-anh-vinmec-hn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bệnh viện Đa khoa An Việt",
          address: "Số 1E Trường Chinh - Thanh Xuân - Hà Nội",
          image: "090854-bv-an-viet1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phòng khám Vietlife MRI Trần Bình Trọng",
          address: "14 Trần Bình Trọng - Hoàn Kiếm - Hà Nội",
          image: "092248-vietlife.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Phòng khám Đa khoa Saigon Healthcare",
          address: "45 Thành Thái, Phường 14, Quận 10, Thành phố Hồ Chí Minh",
          image: "anh-sg-toan-dien-ben-ngoai.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bệnh viện Nam học và Hiếm muộn Hà Nội",
          address: "431 Tam Trinh (Lô 01 – 8A),Hoàng Mai, Hà Nội",
          image: "145224-bn-nam-hoc-va-hiem-muon-hn.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bệnh viện Mắt quốc tế DND",
          address: "128 Bùi Thị Xuân, Hai Bà Trưng, Hà Nội",
          image: "101123-bv-mat-dnd1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("clinics", null, {});
  },
};
