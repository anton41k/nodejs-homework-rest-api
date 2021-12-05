const { Contact } = require('../../models')

const listContacts = async (req, res) => {
  const { _id } = req.user
  const { page = 1, limit = 20 } = req.query
  const skip = (page - 1) * limit
  const result = await Contact.find(
    { owner: _id },
    '',
    {
      skip,
      limit: Number(limit)
    })
    .populate('owner', '_id subscription email')
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = listContacts
