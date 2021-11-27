const { Contact } = require('../../model')
const { NotFound } = require('http-errors')

const getContactById = async (req, res) => {
  const { contactId } = req.params
  const result = await Contact.findById(contactId) // findOne({ _id: contactId })
  if (!result) {
    throw NotFound(`Contact with id=${contactId} not found!`)
  }
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = getContactById
