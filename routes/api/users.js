const express = require('express')

const { auth, validation, ctrlWrapper, uploadMiddleware } = require('../../middlewares')
const { subscriptionJoiSchema, joiEmailValidation } = require('../../models/user')
const { users: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent))

router.patch('/subscription', auth, validation(subscriptionJoiSchema), ctrlWrapper(ctrl.updateSubscriptionUser))

router.patch('/avatars', auth, uploadMiddleware.single('image'), ctrlWrapper(ctrl.addUserAvatar))

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail))

router.post('/verify', validation(joiEmailValidation), ctrlWrapper(ctrl.reverify))

module.exports = router
