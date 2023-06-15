const { Contact, contactSchemas } = require("../models/contacts");
const { User, userSchemas } = require("./user");

module.exports = { Contacts: Contact, User, contactSchemas, userSchemas };
