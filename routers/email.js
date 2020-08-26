const express = require('express')
const router = express.Router()
const { runValidation, validationRegister } = require('../validation/register-validation')

const {
    submitEmail,
    index
} = require('../controllers/register-controllers')

router
    .route('/')
    .get(index)

router
    .route('/search')
    .post(validationRegister, runValidation, submitEmail)

module.exports = router