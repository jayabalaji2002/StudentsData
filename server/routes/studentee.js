const express = require('express')
const router = express.Router()
const {userRegister} = require('../validation/inputValidation')

const StudentController = require('../controllers/StudentController')
// const upload = require('../middleware/upload')

router.get('/',StudentController.index)
router.post('/show',StudentController.show)
router.post('/store',userRegister,StudentController.store)
router.post('/update',StudentController.update)
router.post('/delete',StudentController.destroy)


module.exports = router


