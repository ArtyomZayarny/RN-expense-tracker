import axios from 'axios';

const ROOT_DB =
  'https://expese-app-d9626-default-rtdb.firebaseio.com/expenses.json';

export const storeExpense = (expenseData) => {
  axios.post(ROOT_DB, expenseData);
};
