const { Schema, model } = require('mongoose')
const Joi = require('joi')
const bcrypt = require('bcryptjs')

const emailRegexp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/

const userSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name required'],
  },
  email: {
    type: String,
    required: [true, 'Set name required'],
    unique: true,
    match: emailRegexp
  },
  password: {
    type: String,
    required: [true, 'Set name required'],
    minlength: 6,
  },
}, { versionKey: false, timestamps: true })

userSchema.methods.setPassword = function(password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

const joiRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required()
})

const joiLoginSchema = Joi.object({
  email: Joi.string().email().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required()
})

const User = model('user', userSchema)

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema
}
