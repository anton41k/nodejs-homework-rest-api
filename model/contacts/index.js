const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const add = require('./add')
const updateContacts = require('./updateContacts')
const removeById = require('./removeById')
const updateById = require('./updateById')

module.exports = {
  listContacts,
  getContactById,
  add,
  removeById,
  updateContacts,
  updateById
}
