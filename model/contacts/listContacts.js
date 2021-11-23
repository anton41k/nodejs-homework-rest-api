const fs = require('fs/promises')
const filePath = require('./filePath')

async function listContacts() {
  const contactsFile = await fs.readFile(filePath)
  const contactsParsed = JSON.parse(contactsFile)
  return contactsParsed
}
module.exports = listContacts
