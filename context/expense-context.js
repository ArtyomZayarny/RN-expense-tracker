import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'f1',
    description: 'A pair of cool shoes',
    amount: 59.99,
    date: new Date('2023-03-15'),
  },
  {
    id: 'f2',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  // {
  //   id: 'f3',
  //   description: 'A pair of t-shirts',
  //   amount: 18.99,
  //   date: new Date('2022-01-19'),
  // },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

export const ExpenseContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id, data: expenseData } });
  };
  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
