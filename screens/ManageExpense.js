import { View, StyleSheet } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { IconButton } from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/style';
import { ExpenseContext } from '../context/expense-context';
import { ExpenseForm } from '../components/ManageExpense/ExpenseForm';

const ManageExpense = ({ route }) => {
  const expenseCtx = useContext(ExpenseContext);
  const navigation = useNavigation();
  const id = route.params?.expenseId;

  const isEditing = !!id;

  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === id
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expenseCtx.deleteExpense(id);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expenseData) => {
    if (isEditing) {
      expenseCtx.updateExpense(id, expenseData);
    } else {
      expenseCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValues={selectedExpense}
        submitButtonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.color.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.color.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.color.primary200,
    alignItems: 'center',
  },
});
