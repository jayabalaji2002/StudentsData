const express = require('express')
const router = express.Router()

const StudentController = require('../controllers/StudentController')
const upload = require('../middleware/upload')

router.get('/',StudentController.index)
router.post('/show',StudentController.show)
router.post('/store',upload.single('profilePhoto'), StudentController.store)
router.post('/update',StudentController.update)
router.post('/delete',StudentController.destroy)

module.exports = router


