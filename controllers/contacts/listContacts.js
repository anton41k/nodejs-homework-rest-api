const { Contact } = require('../../model')

const listContacts = async (req, res) => {
  const result = await Contact.find({})
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = listContacts
