const express = require('express')
const router = express.Router()
const { runValidation, loginValidation } = require('../validation/global-validation')
const {
    loginIndex,
    doLogin
} = require('../controllers/login-controllers')

router
    .route('/')
    .get(loginIndex)
    .post(loginValidation, doLogin)

module.exports = router