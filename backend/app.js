const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const contact = require("./routes/contactRoute");

app.use("/api/v1", contact);

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    console.log("Hi, Server is Running");
  });
}

module.exports = app;
