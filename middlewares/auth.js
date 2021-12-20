const jwt = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')

const { User } = require('../models')

const { SECRET_KEY } = process.env

async function auth(req, res, next) {
  const { authorization = '' } = req.headers
  const [bearer, token] = authorization.split(' ')

  try {
    if (bearer !== 'Bearer') {
      throw Unauthorized('Not authorized')
    }
    const { id } = jwt.verify(token, SECRET_KEY)
    const user = await User.findById(id)
    if (!user || !user.token) {
      throw Unauthorized('Not authorized')
    }
    req.user = user
    next()
  } catch (error) {
    if (error.message === 'Ivalid sugnature') {
      error.status = 401
    }
    next(error)
  }
}

module.exports = auth
