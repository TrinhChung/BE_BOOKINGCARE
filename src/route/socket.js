import { checkUserJoinRoom } from "../middleware/socket";

export const checkRequestSocket = (socket, next) => {
  checkUserJoinRoom(socket, next);
  next();
};
