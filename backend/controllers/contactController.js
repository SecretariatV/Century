const Contact = require("../models/contactModel");

const submitContact = async (req, res, next) => {
    const { name, mail, phone, message } = req.body;

    const namePattern = /^([A-Z][a-z]*)(\s[A-Z][a-z]*){0,2}$/;
    const mailPattern = /^[a-z][a-z0-9.]*@[a-z]+\.[a-z]+$/;
    const phoneNumberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if (!namePattern.test(name)) {
      res.status(200).json({status: false, message: "Name is invalid"});
      return;
    }

    if (!mailPattern.test(mail)) {
      res.status(200).json({status: false, message: "Mail is invalid"});
      return;
    }

    if (!phoneNumberPattern.test(phone)) {
      res.status(200).json({status: false, message: "Phone number is invalid"});
      return;
    }

    const contact = await Contact.create({
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
