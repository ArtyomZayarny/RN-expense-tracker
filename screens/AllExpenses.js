import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpenseContext } from '../context/expense-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={'Total'}
      fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpenses;
