import axios from 'axios';

const ROOT_DB = 'https://expese-app-d9626-default-rtdb.firebaseio.com';

export const storeExpense = async (expenseData) => {
  const response = await axios.post(ROOT_DB + '/expenses.json', expenseData);

  const id = response.data.name;

  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(ROOT_DB + '/expenses.json');

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};

export const updateExpense = (id, expenseData) => {
  return axios.put(ROOT_DB + `/expenses/${id}.json`, expenseData);
};
export const deleteExpense = (id) => {
  return axios.delete(ROOT_DB + `/expenses/${id}.json`);
};
