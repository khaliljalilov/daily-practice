const express = require('express');
const router = express.Router()
const {handleNewUser} = require('../controller/registerController')

router.post('/register', handleNewUser)

module.exports = router