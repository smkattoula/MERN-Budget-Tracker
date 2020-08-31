import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });

    console.log(income);
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: +incomeAmount,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });

    console.log(expense);
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: +expenseAmount,
      };

      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  return (
    <div className="form-wrapper">
      <Form onSubmit={onSubmitIncome}>
        <FormGroup className="input-group income">
          <Label className="label" for="transactionName">
            Name
          </Label>
          <Input
            style={{ width: "30%", borderRadius: "5px" }}
            type="text"
            name="incomeText"
            value={incomeText}
            onChange={onChangeIncome}
            placeholder="Add Income.."
          />
          <Label className="label" for="transactionAmount">
            Amount
          </Label>
          <Input
            style={{ width: "30%", borderRadius: "5px" }}
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            onChange={onChangeIncome}
            placeholder="Add Amount.."
          />
          <button className="submit income">Submit</button>
        </FormGroup>
      </Form>

      <Form onSubmit={onSubmitExpense}>
        <FormGroup className="input-group expense">
          <Label className="label" for="transactionName">
            Name
          </Label>
          <Input
            style={{ width: "30%", borderRadius: "5px" }}
            type="text"
            name="expenseText"
            value={expenseText}
            onChange={onChangeExpense}
            placeholder="Add Expense.."
          />
          <Label className="label" for="transactionAmount">
            Amount
          </Label>
          <Input
            style={{ width: "30%", borderRadius: "5px" }}
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            onChange={onChangeExpense}
            placeholder="Add Amount.."
          />
          <button className="submit expense">Submit</button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AddTransaction;
