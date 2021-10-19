const express = require('express')

const { get } = require('../controllers/user')

const router = express.Router()

router.route('/').get(get)

module.exports = router