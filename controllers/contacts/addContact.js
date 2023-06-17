const { Contacts } = require("../../models");

const addContact = async (req, res) => {
  const { _id } = req.user;
  const newContact = await Contacts.create({ ...req.body, owner: _id });
  res.status(201).json({ status: "succsess", code: 201, data: newContact });
};

module.exports = addContact;
