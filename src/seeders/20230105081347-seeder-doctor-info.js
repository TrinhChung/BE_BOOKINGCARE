"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("doctorinfo", [
      {
        doctorId: 1,
        specialtyId: 1,
        clinicId: 1,
        priceId: "PRI1",
        provinceId: "PRO2",
        paymentId: "PAY2",
        addressClinic: "Phong 403",
        nameClinic: "Phong kham bat on",
        note: "Không nhận tiền mặt",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 2,
        specialtyId: 2,
        clinicId: 2,
        priceId: "PRI2",
        provinceId: "PRO3",
        paymentId: "PAY1",
        addressClinic: "Phong 404",
        nameClinic: "Kham nao",
        note: "Khong nhan tre nho",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 3,
        specialtyId: 3,
        clinicId: 3,
        priceId: "PRI2",
        provinceId: "PRO3",
        paymentId: "PAY1",
        addressClinic: "Phong 102",
        nameClinic: "Phong kham tang 1",
        note: `Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai
        Chủ tịch Hội Thấp khớp học Việt Nam
        Giáo sư đầu ngành với gần 50 năm kinh nghiệm điều trị các bệnh lý liên quan đến Cơ xương khớp
        Bác sĩ khám cho người bệnh từ 14 tuổi trở lên`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 4,
        specialtyId: 1,
        clinicId: 1,
        priceId: "PRI2",
        provinceId: "PRO2",
        paymentId: "PAY2",
        addressClinic: "Phong 505",
        nameClinic: "Phong kham tang 5",
        note: `Trưởng Khoa Dinh Dưỡng bệnh viện Da Liễu TP.HCM
        Nguyên Phó trưởng khoa Lâm sàng 1, Bệnh viện Da Liễu TPHCM
        Bác sĩ Hương có hơn 20 năm kinh nghiệm trong khám và điều trị bệnh lý da liễu
        `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 5,
        specialtyId: 2,
        clinicId: 2,
        priceId: "PRI2",
        provinceId: "PRO2",
        paymentId: "PAY1",
        addressClinic:
          "30/1A Ngô Thời Nhiệm, Phường 7, Quận 3, Thành phố Hồ Chí Minh",
        nameClinic: "Phòng khám Da liễu Táo Đỏ",
        note: `Chuyên gia trên 35 năm kinh nghiệm trong lĩnh vực bệnh lý Tiêu hóa
        Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa
        Nguyên Giám đốc Bệnh viện Đại học Y Hà Nội       
        `,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 6,
        specialtyId: 2,
        clinicId: 3,
        priceId: "PRI5",
        provinceId: "PRO2",
        paymentId: "PAY1",
        addressClinic: "Hà Nội Việt Nam",
        nameClinic: "Phòng khám cơ xương khớp Hà Nội",
        note: "Thanh toán sau khi khám và thanh toán bằng Credit card",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 7,
        specialtyId: 1,
        clinicId: 1,
        priceId: "PRI4",
        provinceId: "PRO2",
        paymentId: "PAY2",
        addressClinic: "Số 1E Trường Chinh - Thanh Xuân - Hà Nội",
        nameClinic: "Đa khoa An Việt",
        note: `Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
        Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương
        Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 8,
        specialtyId: 3,
        clinicId: 2,
        priceId: "PRI7",
        provinceId: "PRO1",
        paymentId: "PAY1",
        addressClinic: "Cầu Giấy, Hà Nội, Việt Nam",
        nameClinic: "Phong kham IT",
        note: "Dieu tri coder",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("doctorinfo", null, {});
  },
};
