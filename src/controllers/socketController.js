const eventSocket = (socket) => {
  eventRoom(socket);
};

const sendMessage = (socket, roomId) => {
  socket.on("message", (message) => {
    console.log(message);
    io.to(roomId).emit("newMessage", message);
  });
};

const disconnect = (socket, userId, roomId) => {
  socket.on("disconnect", () => {
    socket.to(roomId).emit("user-disconnected", userId);
  });
};

const joinRoom = (socket, userId, roomId) => {
  socket.join(roomId);
  socket.to(roomId).emit("user-connected", userId);
};

const eventRoom = (socket) => {
  socket.on("join-room", (roomId, userId) => {
    joinRoom(socket, userId, roomId);
    sendMessage(socket, roomId);
    disconnect(socket, userId, roomId);
  });
};

module.exports = {
  eventSocket: eventSocket,
};
