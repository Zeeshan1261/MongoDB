const mongoose = require("mongoose");
require("dotenv").config();

// let mongoUrl =
//   "mongodb+srv://admin:admin@cluster0.soy08oa.mongodb.net/carsData";
let mongoenvUrl = process.env.MONGODB_URL;

// mongoose.connect(mongoUrl);
mongoose.connect(mongoenvUrl);

let connection = mongoose.connection;

connection.on("error", () => {
  console.log("failed to connect");
});
connection.on("connected", () => {
  console.log("MongoDB connected sucessfully");
});
module.exports = mongoose;
