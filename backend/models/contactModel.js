const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  mail: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
