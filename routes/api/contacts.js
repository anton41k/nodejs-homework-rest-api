const express = require('express')
const router = express.Router()

const { validation, ctrlWrapper } = require('../../middlewares')
const { joiSchema, favoriteJoiSchema } = require('../../model/contact')
const { contacts: ctrl } = require('../../controllers')

router.get('/', ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', ctrlWrapper(ctrl.getContactById))

router.post('/', validation(joiSchema), ctrlWrapper(ctrl.add))

router.delete('/:contactId', ctrlWrapper(ctrl.removeById))

router.put('/:contactId', validation(joiSchema), ctrlWrapper(ctrl.updateById))

router.patch('/:contactId/favorite', validation(favoriteJoiSchema), ctrlWrapper(ctrl.updateStatusContact))

module.exports = router
