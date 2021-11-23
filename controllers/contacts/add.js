const contactsOperations = require('../../model/contacts')

const add = async (req, res) => {
  const result = await contactsOperations.add(req.body)
  res.status(201).json({
    status: 'succes',
    code: 201,
    data: {
      result
    }
  })
}

module.exports = add
