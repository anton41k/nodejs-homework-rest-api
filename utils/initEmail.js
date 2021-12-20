const initEmail = ({ email, verificationToken }) => ({
  to: email,
  subject: 'Confirmation of the letter',
  html: `<a target='_blank' href='http://localhost:3000/api/users/verify/${verificationToken}'>Confirm email</a>`

})

module.exports = initEmail
