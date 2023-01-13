import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import { router } from "./route";
import connectDB from "./config/connectDB";
import cors from "cors";
require("dotenv").config();

const app = express();

const { ExpressPeerServer } = require("peer");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const peerServer = ExpressPeerServer(server, {
  debug: true,
});
app.use("/peerjs", peerServer);

app.use(cors({ origin: true }));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.URL_REACT);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb" }));

connectDB();

viewEngine(app);
app.use("/api", router);

let port = process.env.PORT || 8080;

io.on("connection", (socket) => {
  socket.emit("hello", "hello");

  socket.emit("room-id", 1);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("join-room", (roomId, userId) => {
    console.log(userId);
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);

    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message);
    });
  });
});

server.listen(port, () => {
  console.log("listening on port: " + port);
});
