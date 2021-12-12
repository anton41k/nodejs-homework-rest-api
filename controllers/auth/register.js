const { Conflict } = require('http-errors')
const gravatar = require('gravatar')

const { User } = require('../../models')

async function register(req, res) {
  const { subscription, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`User with ${email} already exist`)
  }

  const avatarURL = gravatar.url(email)
  const newUser = new User({ subscription, email, avatarURL })
  newUser.setPassword(password)
  newUser.save()

  res.status(201).json({
    status: 'succes',
    code: 201,
    data: {
      user: {
        email,
        subscription,
        avatarURL
      }
    }
  })
}

module.exports = register
