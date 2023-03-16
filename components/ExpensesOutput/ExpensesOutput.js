import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/style';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of t-shirts',
    amount: 18.99,
    date: new Date('2022-01-19'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 6.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 12.99,
    date: new Date('2022-03-21'),
  },
  {
    id: 'e5',
    description: 'A book',
    amount: 18.99,
    date: new Date('2022-05-12'),
  },
  {
    id: 'e2',
    description: 'A pair of t-shirts',
    amount: 18.99,
    date: new Date('2022-01-19'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 6.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 12.99,
    date: new Date('2022-03-21'),
  },
  {
    id: 'e5',
    description: 'A book',
    amount: 18.99,
    date: new Date('2022-05-12'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.color.primary700,
  },
});
