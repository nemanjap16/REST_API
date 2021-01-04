const router = require('express').Router()
const conntroller = require('../controller/index')

router.get('/', conntroller.get_home)


module.exports = router