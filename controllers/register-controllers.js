const index = async (req, res) => {
    try {
        res.status(200).render('register-view', { 
            csrfToken : req.csrfToken()
        })
    } catch(e) {

    }
}

const submitEmail = async (req, res) => {
    try {
        const  { email } = req.body
        res.status(200).json({
            status: true,
            data : {
                email : email,
                error : errors
            }
        })
    } catch(e) {
        res.json({
            status : false,
            data : e
        })
    }
}

module.exports = {
    submitEmail, index
}