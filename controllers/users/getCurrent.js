async function getCurrent(req, res) {
  const { email } = req.user
  res.json({
    status: 'success',
    code: 200,
    data: {
      user: {
        email
      }
    }
  })
}

module.exports = getCurrent
