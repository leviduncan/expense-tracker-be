const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    text: { type: String, required: true },
    amount: { type: Number, required: true }
})

module.exports = mongoose.model('Transactions', TransactionSchema)