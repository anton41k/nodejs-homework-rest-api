const { NotFound, BadRequest } = require('http-errors')
const { User } = require('../../models/')
const { sendEmail, initEmail } = require('../../utils')

async function reverify(req, res) {
  const { email } = req.body
  if (!email) {
    throw new BadRequest('missing required field email')
  }
  const user = await User.findOne({ email })

  if (!user) {
    throw new NotFound(`User with email ${email} do not exist`)
  }

  if (user.verify && !user.verificationToken) {
    throw new BadRequest('Verification has already been passed')
  }
  const mail = initEmail(user)

  await sendEmail(mail)

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      message: 'Verification email sent'
    }
  })
}

module.exports = reverify
