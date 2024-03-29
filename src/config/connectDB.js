const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("test", "root", "Chung@1904", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: "3307",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connect has been successful");
  } catch (err) {
    console.error("Error connecting: " + err);
  }
};

module.exports = connectDB;
