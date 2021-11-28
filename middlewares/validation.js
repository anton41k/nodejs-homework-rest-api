const { NotFound } = require('http-errors')
const isValidObjectId = require('./validationId')

const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)
    const { contactId } = req.params

    if (contactId && !isValidObjectId(contactId)) {
      throw NotFound(`Contact with id=${contactId} not found!`)
    }

    if (error) {
      error.status = 400
      next(error)
    }
    next()
  }
}

module.exports = validation
