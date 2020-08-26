const { check, validationResult } = require('express-validator');

const loginIndex = async (req, res) => {
    try {
        res.status(200).render('login-view', { 
            csrfToken : req.csrfToken(),
            form : {
                username : '',
                password : ''
            }
        })
    } catch(e) {
         res.json({
            status : false,
            data : e
        })
    }
}

const doLogin = async (req, res) => {
    try {
        const  { username, password } = req.body
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(200).render('login-view', { 
                csrfToken : req.csrfToken(),
                errors : errors,
                form : {
                    username : username,
                    password : password
                }
            })
        }

        if (username && password) {
            res.send(username + '' + password)
        }
    } catch(e) {
        res.json({
            status : false,
            data : e
        })
    }
}

module.exports = {
    loginIndex, doLogin
}