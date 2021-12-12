const { Contact } = require('../../models')
const { NotFound } = require('http-errors')

async function removeById(req, res) {
  const { contactId } = req.params
  const result = await Contact.findByIdAndRemove(contactId)
  if (!result) {
    throw NotFound(`Contact with id=${contactId} not found!`)
  }
  res.json({
    status: 'succes',
    code: 200,
    message: 'contact deleted',
    data: {
      result
    }
  })
}

module.exports = removeById
