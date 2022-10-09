const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5001

const app = express()

//this will move /api/goals to file in routes folder
app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`server started on port ${port}`))

