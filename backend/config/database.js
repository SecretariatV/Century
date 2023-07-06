const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/century";

const connectDatabase = () => {
  mongoose.connect(MONGO_URI).then(() => {
    console.log("connected DB");
  });
};

module.exports = connectDatabase;
