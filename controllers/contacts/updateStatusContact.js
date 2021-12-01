const { Contact } = require('../../models')
const { BadRequest } = require('http-errors')

const updateFavorite = async (req, res) => {
  const { contactId } = req.params
  const { favorite } = req.body
  const result = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true })
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
