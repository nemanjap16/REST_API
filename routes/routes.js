const router = require('express').Router()
const controller = require('../controller/routesController')


// Get root route
router.get('/', controller.get_home)

// Get quotes 
router.get('/quotes', controller.get_quotes)

// Create new Quote
router.post('/quotes/new', controller.new_quote)


module.exports = router