const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

async function sendEmail(data) {
  const email = { ...data, from: 'anton12petrenko@gmail.com' }
  try {
    await sgMail.send(email)
    console.log('Email send')
    return true
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = sendEmail
