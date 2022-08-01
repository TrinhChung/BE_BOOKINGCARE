require("dotenv").config();
import nodemailer from "nodemailer";
let sendSimpleEmail = async (data) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(getBodyHTMLEmail(data));
};

let getBodyHTMLEmail = (data) => {
  if (data.language === "vi") {
    return {
      from: '"Booking Care" <bookingcare@gmail.com>', // sender address
      to: data.email, // list of receivers
      subject: "Thông tin đặt lịch khám bệnh", // Subject line
      html: `
                <h3>Xin chào ${data.patientName}!</h3>
                <p>Bạn đã đặt lịch khám bệnh online trên Booking Care</p>
                <P>Thông tin đặt lịch khám bệnh:</P>
                <div><b>Thời gian: ${data.time}</b></div>
                <div><b>Bác sĩ: ${data.doctorName}</b></div>
        
                <p>Nếu các thông tin đã chính xác, vui lòng click vào đường link bên dưới để xác nhận và hoàn thành thủ tục đặt lịch khám bệnh</p>
        
                <a href=${data.link} target="_blank">Click here</a>
                <p>Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!</p>
            `, // html body
    };
  } else {
    return {
      from: '"Booking Care" <bookingcare@gmail.com>', // sender address
      to: data.email, // list of receivers
      subject: "Information to book a medical appointment", // Subject line
      html: `
                <h3>Hello ${data.patientName}!</h3>
                <p>You have booked an online medical appointment on Booking Care</p>
                <P>Information to book a medical appointment:</P>
                <div><b>Time: ${data.time}</b></div>
                <div><b>Doctor: ${data.doctorName}</b></div>
        
                <p>If the information is correct, please click on the link below to confirm and complete the procedure to book an appointment.</p>
        
                <a href=${data.link} target="_blank">Click here</a>
                <p>Thank you for using our service!</p>
            `, // html body
    };
  }
};

module.exports = {
  sendSimpleEmail: sendSimpleEmail,
};
