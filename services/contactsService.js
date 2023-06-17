const { Contacts } = require("../models/index");

const listContacts = async (user, skip, limit, favorite) => {
  return Contacts.find(
    favorite ? {
      owner: user,
      favorite
    } : { owner: user }
  )
    .skip(skip)
    .limit(limit);
};

const getContactById = async (contactId, user) => {
  return Contacts.findOne({
    _id: contactId,
    owner: user
  });
};

const removeContact = async (contactId, user) => {
  return Contacts.findOneAndDelete({
    _id: contactId,
    owner: user
  });
};

const updateStatusContact = async (contactId, user, body) => {
  return Contacts.findOneAndUpdate(
    {
      _id: contactId,
      owner: user
    },
    body,
    {
      new: true,
    }
  );
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  updateStatusContact
};