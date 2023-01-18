import db from "../models/index";
import { createNotification } from "../services/notification";

export const checkUserJoinRoom = (socket, next) => {
  socket.on("join-room", async (roomId, userId) => {
    try {
      const booking = await db.Booking.findOne({ where: { id: roomId } });
      if (!booking) {
        next(new Error("Couldn't join'"));
      }
      if (
        Number(booking.doctorId) !== Number(userId) &&
        Number(booking.patientId) !== Number(userId)
      ) {
        next(new Error("Couldn't join'"));
      }
      if (Number(booking.doctorId) === Number(userId)) {
        createNotification({
          userId: booking.patientId,
          type: "callVideo",
          typeId: booking.id,
          content:
            "Bác sĩ đã vào phòng khám từ xa của bạn. Hãy gia nhập phòng khám để bắt đầu buổi khám bệnh.",
        });
      }
      next();
    } catch (error) {
      console.log("Error: " + error);
      next(new Error("Couldn't join'"));
    }
  });
};
