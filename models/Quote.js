const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        maxlength: 255
    }
})

const Quote = mongoose.model('Quote', QuoteSchema)

module.exports = Quote