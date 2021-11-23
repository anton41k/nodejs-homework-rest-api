const contactsOperations = require('../../model/contacts')

const listContacts = async (req, res) => {
  const result = await contactsOperations.listContacts()
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = listContacts
