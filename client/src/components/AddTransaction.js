import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddTransaction = () => {
  return (
    <div className="form-wrapper">
      <Form>
        <FormGroup className="input-group income">
          <Label for="transactionName">Name</Label>
          <Input
            type="text"
            name="name"
            id="transactionName"
            placeholder="Add Income.."
          />
          <Label for="transactionAmount">Amount</Label>
          <Input
            type="number"
            name="amount"
            id="transactionAmount"
            placeholder="Add Amount.."
          />
          <Button>Submit</Button>
        </FormGroup>
      </Form>

      <Form>
        <FormGroup className="input-group expense">
          <Label for="transactionName">Name</Label>
          <Input
            type="text"
            name="name"
            id="transactionName"
            placeholder="Add Expense.."
          />
          <Label for="transactionAmount">Amount</Label>
          <Input
            type="number"
            name="amount"
            id="transactionAmount"
            placeholder="Add Amount.."
          />
          <Button>Submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AddTransaction;
