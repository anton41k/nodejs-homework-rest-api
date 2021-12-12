const { User } = require('../../models')

async function updateSubscriptionUser(req, res) {
  const { email } = req.user
  const { subscription } = req.body
  const { _id } = req.user

  await User.findByIdAndUpdate(_id, { subscription })

  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        email,
        subscription
      }
    }
  })
}

module.exports = updateSubscriptionUser
