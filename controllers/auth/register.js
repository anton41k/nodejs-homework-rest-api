const { Conflict } = require('http-errors')

const { User } = require('../../models')

const register = async (req, res) => {
  const { subscription, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`User with ${email} already exist`)
  }

  const newUser = new User({ subscription, email })
  newUser.setPassword(password)
  newUser.save()

  res.status(201).json({
    status: 'succes',
    code: 201,
    data: {
      user: {
        email,
        subscription,
      }
    }
  })
}

module.exports = register
