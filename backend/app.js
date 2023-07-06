const express = require("express");
const path = require("path");

const app = express();

__dirname = path.resolve();
console.log("dir", __dirname);

app.use(express.json());

const contact = require("./routes/contactRoute");

app.use("/api/v1", contact);

app.get("/", (req, res) => {
  console.log("Hi, Server is Running");
});

module.exports = app;
