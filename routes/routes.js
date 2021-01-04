const router = require('express').Router()
const controller = require('../controller/routesController')


// Get root route
router.get('/', controller.get_home)

// Get quotes 
router.get('/quotes', controller.get_quotes)

// Create new Quote
router.post('/quotes/new', controller.new_quote)

// Find specific quote
router.get('/quotes/get/:id', controller.find_quote_by_id)

// Delete quote
router.delete('/quotes/delete/:id', controller.delete_by_id)

// Patch quote
router.patch('/quotes/update/:id', controller.update_by_id)



module.exports = router