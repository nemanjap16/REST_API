const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

// Create Express App
const app = express()

// Database connection
const dbconnect = `mongodb+srv://nemanja10:nemanja123@nemanja.qgpmy.mongodb.net/quotes?retryWrites=true&w=majority`
mongoose.connect(dbconnect, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(() => console.log(`Successfully connected to database.`))
  .catch((err) => console.log(err))

//Middlewares
app.use(express.json())
app.use(express.static('public'))

// Seting view engine
// app.set('view engine', 'ejs')


// Routes
app.use(routes)

app.listen(3000, () => {
    console.log(`Server running on port: 3000`)
})