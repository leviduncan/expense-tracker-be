const express = require('express')
const router = express.Router()
const Transaction = require('../../models/transactionmodel')

// Create a new Transaction
router.post('/add', (req, res) => {
    const newTransaction = new Transaction({
        text: req.body.text,
        amount: req.body.amount
    })
    newTransaction.save()
        .then(transaction => res.json(transaction))
        .catch(err => res.status(400).json(err))
})

// Get all transactions
router.get('/', (req, res) => {
    Transaction.find()
                .then(transactions => res.json(transactions))
                .catch(err => res.status(400).json(err))
})

// Update an individual transaction based on id
router.put('/:id', (req, res) => {
    Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(transaction => res.json(transaction))
        .catch(err => res.status(400).json(err))
})

// Delete an individual transaction based on id
router.delete('/:id', (req, res) => {
    Transaction.findByIdAndRemove(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(400).json(err))
})

module.exports = router