const { Contact } = require('../../model')
const { NotFound, BadRequest } = require('http-errors')

const updateFavorite = async (req, res) => {
  const { contactId } = req.params
  const { favorite } = req.body

  const result = await Contact.findOneAndUpdate(contactId, { favorite }, { new: true })
  if (!result) {
    throw NotFound(`Contact with id=${contactId} not found!`)
  }
  if (favorite === undefined) {
    throw BadRequest('missing field favorite')
  }
  res.json({
    status: 'succes',
    code: 200,
    message: 'contact update',
    data: {
      result
    }
  })
}

module.exports = updateFavorite
