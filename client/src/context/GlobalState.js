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
    getTransactions();
  }, []);

  const getTransactions = () => {
    axios
      .get("/api/transactions")
      .then((res) => dispatch({ type: "GET_TRANSACTIONS", payload: res.data }))
      .catch((err) => console.log(err));
  };

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

  const deleteTransaction = (id) => {
    axios
      .delete(`/api/transactions/${id}`)
      .then((res) => console.log(res.data))
      .then(() =>
        dispatch({
          type: "DELETE_TRANSACTION",
          payload: id,
        })
      )
      .catch((err) => console.log(err));
  };

  // localStorage.setItem(
  //   "incomeTransactions",
  //   JSON.stringify(state.incomeTransactions)
  // );
  // localStorage.setItem(
  //   "expenseTransactions",
  //   JSON.stringify(state.expenseTransactions)
  // );

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
