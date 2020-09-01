import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const numberWithCommas = (e) => {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <li className="transaction expense">
      <span className="transaction-text">
        {expenseTransaction.expenseText}:
      </span>
      <span className="transaction-amount">
        ${numberWithCommas(expenseTransaction.expenseAmount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(expenseTransaction._id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;
