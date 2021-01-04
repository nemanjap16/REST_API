const Quote = require('../models/Quote')

// get home route controller
exports.get_home = (req, res) => {
    res.send('index')
}


// get quotes
exports.get_quotes = (req, res) => {
    res.send('Quotes')
}


// create new quote controller
exports.new_quote = (req, res) => {
    const content = req.body
    res.json(content)
}