const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TransactionSchema = new Schema({
  incomeText: {
    type: String,
    trim: true,
  },
  expenseText: {
    type: String,
    trim: true,
  },
  incomeAmount: {
    type: Number,
  },
  expenseAmount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Transaction = mongoose.model("transaction", TransactionSchema);
