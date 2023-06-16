const { Contact, contactSchemas } = require("./contacts");
const { User, userSchemas } = require("./user");

module.exports = { Contacts: Contact, User, contactSchemas, userSchemas };