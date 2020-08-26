const { check, validationResult } = require('express-validator');

const runValidation = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({ 
                status : false, 
                errors: errors.array() 
            });
        }
        next()
    } catch(err) {
        res.status(422).json({ errors: err.mapped() });
    }
}

const validationRegister = [
    check('username')
        .isLength({ min: 5 })
        .withMessage('Username tidak boleh kosong'),

    check('email')
        .isEmail()
        .withMessage('Masukan email dengan benar')
        .trim()
        .normalizeEmail(),

    check('password')
        .isLength({ min: 1})
        .withMessage('Password minimal 1 karakter')
        .custom((value,{req, loc, path}) => {
            if (value !== req.body.password_confirm) {
                // trow error if passwords do not match
                throw new Error("Passwords don't match");
            } else {
                return value;
            }
        })
]

module.exports = {
    runValidation, validationRegister
}