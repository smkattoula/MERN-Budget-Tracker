const express = require("express");
const router = express.Router();

// Transaction Model
const Transaction = require("../../models/Transaction");

// Route: GET api/transactions
// Description: Get all transactions
// Access: Public

router.get("/", (req, res) => {
  Transaction.find()
    .sort({ date: -1 })
    .then((transactions) => res.json(transactions));
});

// Route: POST api/transactions
// Description: Create a transaction
// Access: Public

router.post("/", (req, res) => {
  const newTransaction = new Transaction({
    incomeText: req.body.incomeText,
    incomeAmount: req.body.incomeAmount,
    expenseText: req.body.expenseText,
    expenseAmount: req.body.expenseAmount,
  });

  newTransaction
    .save()
    .then((transaction) => res.json(transaction))
    .catch((err) => res.status(400).json("Error " + err));
});

// Route: DELETE api/transactions/:id
// Description: Delete an existing transaction
// Access: Public

router.delete("/:id", (req, res) => {
  Transaction.findById(req.params.id)
    .then((transaction) =>
      transaction.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json("Error " + err));
});
module.exports = router;
