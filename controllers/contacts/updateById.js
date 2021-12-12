const { Contact } = require('../../models')
const { NotFound } = require('http-errors')

async function updateById(req, res) {
  const { contactId } = req.params
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })
  if (!result) {
    throw NotFound(`Contacts with id=${contactId} not found!`)
  }
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = updateById
