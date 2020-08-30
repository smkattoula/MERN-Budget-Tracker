import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list expense">
        {expenseTransactions.map((expenseTransaction) => (
          <li className="transaction expense">
            <span className="transaction-text">
              {expenseTransaction.expenseText}:
            </span>
            <span style={{ marginLeft: "10px" }} className="transaction-amount">
              ${expenseTransaction.expenseAmount}
            </span>
            <button className="delete-btn">
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
