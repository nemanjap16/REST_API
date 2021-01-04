const Quote = require('../models/Quote')

// get home route controller
exports.get_home = (req, res) => {
    res.json('index')
}


// get quotes
exports.get_quotes = async (req, res) => {
    try {
        const quotes = await Quote.find()
        res.json(quotes)
    } catch (error) {
        res.json(`Can't find quotes.`)
    }
}


// create new quote controller
exports.new_quote = async (req, res) => {
    try {
        const newQuote = await new Quote(req.body).save()
        
        res.json(newQuote)

    } catch (error) {
        console.log(error)
        res.json('Error')
    }  
}

// Find quote by ID
exports.find_quote_by_id = async (req, res) => {
    try {
        const quote = await Quote.findById({ _id: req.params.id })
        res.json(quote)
    } catch (error) {
        res.json(`Can't find quote by ID.`)
    }
}

// Delete quote by ID
exports.delete_by_id = async (req, res) => {
    try {
        const quote = await Quote.deleteOne({ _id: req.params.id })
        res.json(quote)
    } catch (error) {
        res.json(`Error.`)
    }
}

// Patch quote
exports.update_by_id = async (req, res) => {
    try {
        const quote = await Quote.updateOne({ _id: req.params.id }, {$set: req.body})
        res.json(quote)
    } catch (error) {
        res.json(`Error.`)
    }
}