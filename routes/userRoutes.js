const express = require('express')
const router = express.Router()

const {signup, login, logout} = require('../controllers/userController')

router.route('/signup').post(signup)
router.route('/login').post(login)
router.route('/logout').get(logout)


module.exports = router