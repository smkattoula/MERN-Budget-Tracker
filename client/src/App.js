import React from "react";
import AppNavBar from "./components/AppNavBar";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <AppNavBar />
      <div className="app-wrapper">
        <Header />
        <Balance />
        <AddTransaction />
        <IncomeList />
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
