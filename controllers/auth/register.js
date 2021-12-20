const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const { nanoid } = require('nanoid')

const { User } = require('../../models')
const { sendEmail, initEmail } = require('../../utils')

async function register(req, res) {
  const { subscription, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`User with ${email} already exist`)
  }

  const verificationToken = nanoid()

  const avatarURL = gravatar.url(email)
  const newUser = new User({ subscription, email, avatarURL, verificationToken })
  newUser.setPassword(password)
  await newUser.save()

  const mail = initEmail(user)

  await sendEmail(mail)

  res.status(201).json({
    status: 'succes',
    code: 201,
    data: {
      user: {
        email,
        subscription,
        avatarURL,
        verificationToken
      }
    }
  })
}

module.exports = register
