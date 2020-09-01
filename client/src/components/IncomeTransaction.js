import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const numberWithCommas = (e) => {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <li className="transaction income">
      <span className="transaction-text">{incomeTransaction.incomeText}:</span>
      <span className="transaction-amount">
        ${numberWithCommas(incomeTransaction.incomeAmount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(incomeTransaction._id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default IncomeTransaction;
