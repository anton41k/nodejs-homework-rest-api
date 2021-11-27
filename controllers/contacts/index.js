const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const add = require('./add')
const removeById = require('./removeById')
const updateById = require('./updateById')
const updateStatusContact = require('./updateStatusContact')

module.exports = {
  listContacts,
  getContactById,
  add,
  removeById,
  updateById,
  updateStatusContact,
}
