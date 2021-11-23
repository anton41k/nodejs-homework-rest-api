const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

async function removeById(id) {
  const contacts = await listContacts()
  // eslint-disable-next-line eqeqeq
  const idx = contacts.findIndex(contact => contact.id == id)
  if (idx === -1) {
    return null
  }
  const [removeContact] = contacts.splice(idx, 1)
  await updateContacts(contacts)
  return removeContact
}
module.exports = removeById
