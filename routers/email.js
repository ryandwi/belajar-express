const express = require('express')
const router = express.Router()

const { runValidation, validationRegister } = require('../validation/global-validation')

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

router.use(function(req, res, next) {
    if (!req.route)
        return res.status(404).json({
            status : false,
            data: 'Error 404'
        })
    next();
});

module.exports = router