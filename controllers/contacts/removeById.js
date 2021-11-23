const contactsOperations = require('../../model/contacts')
const { NotFound } = require('http-errors')

const removeById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperations.removeById(contactId)
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
