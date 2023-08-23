const express = require('express')
const app = express()
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8800

require('dotenv').config()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

// connectDB()

app.get("/", (req, res) => {
    res.send('Woo, hoo! We are good to go!')
})

const transactionRouter = require('./routes/api/transactionRoutes')
app.use('./api', transactionRouter)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on Port: ${port}`)
    })
})

