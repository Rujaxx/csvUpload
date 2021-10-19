const express = require('express')

const { post } = require('../controllers/upload')

const router = express.Router()

router.route('/').post(post)

module.exports = router