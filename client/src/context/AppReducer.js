export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        incomeTransactions: action.payload.filter(
          (incomeTransaction) => incomeTransaction.incomeText
        ),
        expenseTransactions: action.payload.filter(
          (expenseTransaction) => expenseTransaction.expenseText
        ),
      };
    case "ADD_INCOME":
      return {
        ...state,
        incomeTransactions: [...state.incomeTransactions, action.payload],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenseTransactions: [...state.expenseTransactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        incomeTransactions: state.incomeTransactions.filter(
          (incomeTransaction) => incomeTransaction.id !== action.payload
        ),
        expenseTransactions: state.expenseTransactions.filter(
          (expenseTransaction) => expenseTransaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
