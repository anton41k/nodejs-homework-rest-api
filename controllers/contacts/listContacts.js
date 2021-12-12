const { Contact } = require('../../models')

async function listContacts(req, res) {
  const { _id } = req.user
  const { page = 1, limit = 20, favorite } = req.query
  const skip = (page - 1) * limit
  const contactsFilter = { owner: _id }

  if (favorite !== undefined && (favorite === 'true' || favorite === 'false')) {
    contactsFilter.favorite = favorite === 'true'
  }

  const result = await Contact.find(
    contactsFilter,
    '',
    {
      skip,
      limit: Number(limit)
    })
    .populate('owner', '_id name email')
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = listContacts
