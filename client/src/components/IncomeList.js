import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  console.log(incomeTransactions);
  return (
    <div className="transactions transactions-income">
      <h2 className="transaction-history">Transaction History</h2>
      <ul className="transaction-list income">
        {incomeTransactions.map((incomeTransaction) => (
          <li className="transaction income">
            <span className="transaction-text">
              {incomeTransaction.incomeText}:
            </span>
            <span className="transaction-amount">
              ${incomeTransaction.incomeAmount}
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

export default IncomeList;
