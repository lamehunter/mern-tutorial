const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5001
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//this will move /api/goals to file in routes folder
app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`server started on port ${port}`))

app.use(errorHandler)