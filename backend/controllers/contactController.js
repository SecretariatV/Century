const contactModel = require("../models/contactModel");

const submitContact = async (req, res, next) => {
  console.log("req", req.body);
  const { name, mail, phone, message } = req.body;
  const contact = await contactModel.create({
    name,
    mail,
    phone,
    message,
  });

  res.status(201).json({
    success: true,
    contact,
  });
};

module.exports = {
  submitContact,
};
