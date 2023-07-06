const mongoose = require("mongoose");

let MONGO_URI;

if (process.env.NODE_ENV === "production") {
  MONGO_URI =
    process.env.MONGO_URI ||
    "mongodb+srv://kharchenkomykola9:DegdDNhMBs1E3pNa@cluster0.gggf7nu.mongodb.net/century";
} else {
  MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/century";
}

const connectDatabase = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected DB");
    });
};

module.exports = connectDatabase;
