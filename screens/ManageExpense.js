import { View, StyleSheet } from 'react-native';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { IconButton } from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/style';
import { ExpenseContext } from '../context/expense-context';
import { ExpenseForm } from '../components/ManageExpense/ExpenseForm';
import { deleteExpense, storeExpense, updateExpense } from '../util/http';
import { LoadingOverlay } from '../components/UI/LoadingOverlay';
import { ErrorOverlay } from '../components/UI/ErrorOverlay';

const ManageExpense = ({ route }) => {
  const [isSubmitting, seIsSubmitting] = useState(false);
  const [error, setError] = useState();
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

  const deleteExpenseHandler = async () => {
    seIsSubmitting(true);
    try {
      await deleteExpense(id);
      expenseCtx.deleteExpense(id);
      navigation.goBack();
    } catch (error) {
      setError('Could not delete expense - please try again later!');
    }
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    seIsSubmitting(true);
    try {
      if (isEditing) {
        expenseCtx.updateExpense(id, expenseData);
        await updateExpense(id, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expenseCtx.addExpense({ ...expenseData }, id);
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not save the data - please try again later');
      seIsSubmitting(false);
    }
  };

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        defaultValues={isEditing ? selectedExpense : {}}
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
