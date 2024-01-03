const joi = require("joi");

const register = joi.object({
    // userName:joi.string().required().min(3).max(20),
    firstName:joi.required(),
    lastName:joi.string().length(1).required(),
    fatherName:joi.required(),
    email:joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase(),
    age:joi.number().integer().min(10).max(28).required(),
    // phone:joi.number().length(10).pattern(/^[0-9]+$/).required(),
    phone:joi.number().integer().min(1900).max(9999999999)
    // password:joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$')).required()
})

const userRegister = async(req, res, next) => {
    try {
        await register.validateAsync({...req.body }, { abortEarly: false })
        next()
    } catch (err) {
        err.status = res.status(400).json({ status: 400, message: err.message || err })
    }
}

module.exports={userRegister};