const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

__dirname = path.resolve();
console.log("dir", __dirname);

app.use(cors());
app.use(express.json());

const contact = require("./routes/contactRoute");

app.use("/api/v1", contact);

app.get("/", (req, res) => {
  console.log("Hi, Server is Running");
});

module.exports = app;
