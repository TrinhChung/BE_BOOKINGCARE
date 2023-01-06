"use strict";
/** @type {import('sequelize-cli').Migration} */
const dataStringAllCode =
  "24,'R1','ROLE','Admin','Quản trị viên','2022-07-27 17:26:13','2022-07-27 17:26:13','管理者'),(25,'R2','ROLE','Doctor','Bác sĩ','2022-07-27 17:26:13','2022-07-27 17:26:13','医者'),(26,'R3','ROLE','Patient','Bệnh nhân','2022-07-27 17:26:13','2022-07-27 17:26:13','病人'),(27,'S1','STATUS','New','Lịch hẹn mới','2022-07-27 17:26:13','2022-07-27 17:26:13','新しいスケジュール'),(28,'S2','STATUS','Confirmed','Đã xác nhận','2022-07-27 17:26:13','2022-07-27 17:26:13','確認'),(29,'S3','STATUS','Done','Đã khám xong','2022-07-27 17:26:13','2022-07-27 17:26:13','完成'),(30,'S4','STATUS','Cancel','Đã hủy','2022-07-27 17:26:13','2022-07-27 17:26:13','キャンセル'),(31,'T1','TIME','8:00 AM - 9:00 AM','8:00 - 9:00','2022-07-27 17:26:13','2022-07-27 17:26:13','8:00 AM - 9:00 AM'),(32,'T2','TIME','9:00 AM - 10:00 AM','9:00 - 10:00','2022-07-27 17:26:14','2022-07-27 17:26:14','9:00 AM - 10:00 AM'),(33,'T3','TIME','10:00 AM - 11:00 AM','10:00 - 11:00','2022-07-27 17:26:14','2022-07-27 17:26:14','10:00 AM - 11:00 AM'),(34,'T4','TIME','11:00 AM - 0:00 PM','11:00 - 12:00','2022-07-27 17:26:14','2022-07-27 17:26:14','11:00 AM - 0:00 PM'),(35,'T5','TIME','1:00 PM - 2:00 PM','13:00 - 14:00','2022-07-27 17:26:14','2022-07-27 17:26:14','1:00 PM - 2:00 PM'),(36,'T6','TIME','2:00 PM - 3:00 PM','14:00 - 15:00','2022-07-27 17:26:14','2022-07-27 17:26:14','2:00 PM - 3:00 PM'),(37,'T7','TIME','3:00 PM - 4:00 PM','15:00 - 16:00','2022-07-27 17:26:14','2022-07-27 17:26:14','3:00 PM - 4:00 PM'),(38,'T8','TIME','4:00 PM - 5:00 PM','16:00 - 17:00','2022-07-27 17:26:14','2022-07-27 17:26:14','4:00 PM - 5:00 PM'),(39,'P0','POSITION','None','Bác sĩ','2022-07-27 17:26:14','2022-07-27 17:26:14','医者'),(40,'P1','POSITION','Master','Thạc sĩ','2022-07-27 17:26:14','2022-07-27 17:26:14','修士'),(41,'P2','POSITION','Doctor','Tiến sĩ','2022-07-27 17:26:14','2022-07-27 17:26:14','博士'),(42,'P3','POSITION','Associate Professor','Phó giáo sư','2022-07-27 17:26:14','2022-07-27 17:26:14','准教授'),(43,'P4','POSITION','Professor','Giáo sư','2022-07-27 17:26:14','2022-07-27 17:26:14','教授'),(44,'M','GENDER','Male','Nam','2022-07-27 17:26:14','2022-07-27 17:26:14','男'),(45,'F','GENDER','Female','Nữ','2022-07-27 17:26:14','2022-07-27 17:26:14','女'),(46,'O','GENDER','Other','Khác','2022-07-27 17:26:14','2022-07-27 17:26:14','他の'),(47,'PRI1','PRICE','10','200000','2022-07-27 17:26:14','2022-07-27 17:26:14','1360'),(48,'PRI2','PRICE','15','250000','2022-07-27 17:26:14','2022-07-27 17:26:14','2040'),(49,'PRI3','PRICE','20','300000','2022-07-27 17:26:14','2022-07-27 17:26:14','2720'),(50,'PRI4','PRICE','25','350000','2022-07-27 17:26:14','2022-07-27 17:26:14','3400'),(51,'PRI5','PRICE','30','400000','2022-07-27 17:26:14','2022-07-27 17:26:14','4080'),(52,'PRI6','PRICE','35','450000','2022-07-27 17:26:14','2022-07-27 17:26:14','4760'),(53,'PRI7','PRICE','40','500000','2022-07-27 17:26:14','2022-07-27 17:26:14','5440'),(54,'PAY1','PAYMENT','Cash','Tiền mặt','2022-07-27 17:26:14','2022-07-27 17:26:14','現金'),(55,'PAY2','PAYMENT','Credit card','Thẻ ATM','2022-07-27 17:26:14','2022-07-27 17:26:14','カード'),(56,'PAY3','PAYMENT','All payment method','Tất cả','2022-07-27 17:26:14','2022-07-27 17:26:14','たべて'),(57,'PRO1','PROVINCE','Ha Noi','Hà Nội','2022-07-27 17:26:14','2022-07-27 17:26:14','ハノイ'),(58,'PRO2','PROVINCE','Ho Chi Minh','Hồ Chí Minh','2022-07-27 17:26:14','2022-07-27 17:26:14','ホーチミン'),(59,'PRO3','PROVINCE','Da Nang','Đà Nẵng','2022-07-27 17:26:14','2022-07-27 17:26:14','ダナン'),(60,'PRO4','PROVINCE','Can Tho','Cần Thơ','2022-07-27 17:26:14','2022-07-27 17:26:14','カントー'),(61,'PRO5','PROVINCE','Binh Duong','Bình Dương','2022-07-27 17:26:14','2022-07-27 17:26:14','ビンズオン'),(62,'PRO6','PROVINCE','Dong Nai','Đồng Nai','2022-07-27 17:26:14','2022-07-27 17:26:14','ドンナイ'),(63,'PRO7','PROVINCE','Quang Ninh','Quảng Ninh','2022-07-27 17:26:14','2022-07-27 17:26:14','クアンニン'),(64,'PRO8','PROVINCE','Hue','Thừa Thiên Huế','2022-07-27 17:26:14','2022-07-27 17:26:14','フエ'),(65,'PRO9','PROVINCE','Quang Binh','Quảng Bình','2022-07-27 17:26:14','2022-07-27 17:26:14','クアンビン'),(66,'PRO10','PROVINCE','Khanh Hoa','Khánh Hòa','2022-07-27 17:26:14','2022-07-27 17:26:14','カインホア'";

const splitStringGenerateDataAllCode = () => {
  const arrData = dataStringAllCode.split("),(");
  const result = [];
  for (let i = 0; i < arrData.length; i++) {
    // console.log(arrData[i]);
    const obj = arrData[i].split("','");
    const firstKey = obj[0].split(",'");
    const t = {
      keyMap: firstKey[1],
      type: obj[1],
      valueEn: obj[2],
      valueVi: obj[3],
      valueJp: obj[6],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    result.push(t);
  }
  return result;
};

const data = splitStringGenerateDataAllCode();
console.log(data);
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("allcodes", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("allcodes", null, {});
  },
};