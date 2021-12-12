const { Contact } = require('../../models')
const { NotFound } = require('http-errors')

async function getContactById(req, res) {
  const { contactId } = req.params
  const result = await Contact.findById(contactId)
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
