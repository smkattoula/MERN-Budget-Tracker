import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  incomeTransactions: [],
  expenseTransactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    axios
      .get("/api/transactions")
      .then((res) => dispatch({ type: "GET_TRANSACTIONS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  const addIncome = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };

  const addExpense = (expenseTransaction) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction,
    });
  };

  const deleteTransaction = (_id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: _id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
