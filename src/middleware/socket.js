import db from "../models/index";

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
      next();
    } catch (error) {
      console.log("Error: " + error);
      next(new Error("Couldn't join'"));
    }
  });
};
