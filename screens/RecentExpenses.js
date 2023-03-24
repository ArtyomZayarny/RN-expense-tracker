import { View, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpenseContext } from '../context/expense-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpenseContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    console.log(
      'expense.date > date7DaysAgo && expense.date <= today',
      expense.date > date7DaysAgo && expense.date <= today
    );
    return expense.date > date7DaysAgo && expense.date <= today;
  });

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    };

    getExpenses();
  }, []);

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={'Last 7 days'}
      fallbackText="No expenses registered for the last 7 days"
    />
  );
};

export default RecentExpenses;
