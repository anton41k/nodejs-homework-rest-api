const listContacts = require('./listContacts')
const fs = require('fs/promises')
const filePath = require('./filePath')
const { nanoid } = require('nanoid')

async function add({ name, email, phone }) {
  const contacts = await listContacts()
  const newContact = { id: nanoid(3), name, email, phone }
  contacts.push(newContact)
  await fs.writeFile(filePath, JSON.stringify(contacts))
  return newContact
}
module.exports = add
