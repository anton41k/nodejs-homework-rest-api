const { Schema, model } = require('mongoose')
const Joi = require('joi')

const emailRegexp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/
const phoneRegexp = /^(([+]\d{2})?[(](\d{3})[)]\s\d{3}[-]\d{2}[-]\d{2})$/

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    match: emailRegexp,
    required: [true, 'Set name for contact'],
  },
  phone: {
    type: String,
    match: phoneRegexp,
    required: [true, 'Set name for contact'],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    require: true
  }
}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().pattern(emailRegexp).required(),
  phone: Joi.string().max(18).pattern(phoneRegexp).required(),
  favorite: Joi.bool()
})

const favoriteJoiSchema = Joi.object({
  favorite: Joi.bool()
})

const Contact = model('contact', contactSchema)

module.exports = {
  Contact,
  joiSchema,
  favoriteJoiSchema
}
