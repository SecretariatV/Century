const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  contactInfo: {
    name: {
      type: String,
      require: true,
    },
    email: {
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
  },
});

module.exports = mongoose.model("Contact", contactSchema);
