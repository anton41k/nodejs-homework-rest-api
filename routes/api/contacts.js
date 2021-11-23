const express = require('express')
const router = express.Router()

const { validation, ctrlWrapper } = require('../../middlewares')
const contactsSchema = require('../../schema')
const { contacts: ctrl } = require('../../controllers')

const validationMiddleware = validation(contactsSchema)

router.get('/', ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', ctrlWrapper(ctrl.getContactById))

router.post('/', validationMiddleware, ctrlWrapper(ctrl.add))

router.delete('/:contactId', ctrlWrapper(ctrl.removeById))

router.put('/:contactId', validationMiddleware, ctrlWrapper(ctrl.updateById))

module.exports = router
