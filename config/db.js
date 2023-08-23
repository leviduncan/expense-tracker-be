const mongoose = require('mongoose')
require('dotenv').config()

const connectDB =async () => {
    try {

    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB