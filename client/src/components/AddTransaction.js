import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const AddTransaction = () => {
  return (
    <div className="form-wrapper">
      <Form>
        <FormGroup className="input-group income">
          <Label className="label" for="transactionName">
            Name
          </Label>
          <Input
            style={{ width: "30%", borderRadius: "5px" }}
            type="text"
            name="name"
            id="transactionName"
            placeholder="Add Income.."
          />
          <Label className="label" for="transactionAmount">
            Amount
          </Label>
          <Input
            style={{ width: "30%", borderRadius: "5px" }}
            type="number"
            name="amount"
            id="transactionAmount"
            placeholder="Add Amount.."
          />
          <button className="submit income">Submit</button>
        </FormGroup>
      </Form>

      <Form>
        <FormGroup className="input-group expense">
          <Label className="label" for="transactionName">
            Name
          </Label>
          <Input
            style={{ width: "30%", borderRadius: "5px" }}
            type="text"
            name="name"
            id="transactionName"
            placeholder="Add Expense.."
          />
          <Label className="label" for="transactionAmount">
            Amount
          </Label>
          <Input
            style={{ width: "30%", borderRadius: "5px" }}
            type="number"
            name="amount"
            id="transactionAmount"
            placeholder="Add Amount.."
          />
          <button className="submit expense">Submit</button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AddTransaction;
