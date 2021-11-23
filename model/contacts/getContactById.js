const listContacts = require('./listContacts')

async function getContactById(id) {
  const contacts = await listContacts()
  // eslint-disable-next-line eqeqeq
  const idx = contacts.findIndex(contact => contact.id == id)
  if (idx === -1) {
    return null
  }
  return contacts[idx]
}
module.exports = getContactById
