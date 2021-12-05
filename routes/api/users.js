const express = require('express')

const { auth, validation, ctrlWrapper } = require('../../middlewares')
const { subscriptionJoiSchema } = require('../../models/user')
const { users: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent))

router.patch('/subscription', auth, validation(subscriptionJoiSchema), ctrlWrapper(ctrl.updateSubscriptionUser))

module.exports = router
