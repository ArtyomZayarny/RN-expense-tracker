import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/style';
import { Button } from '../components/UI/Button';
import { ExpenseContext } from '../context/expense-context';

const ManageExpense = ({ route }) => {
  const expenseCtx = useContext(ExpenseContext);
  const navigation = useNavigation();
  const id = route.params?.expenseId;

  const isEditing = !!id;

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

  const confirmHandler = () => {
    if (isEditing) {
      expenseCtx.updateExpense(id, {
        description: 'A pair of cool shoes (updated)',
        amount: 18.99,
        date: new Date('2023-02-12'),
      });
    } else {
      expenseCtx.addExpense({
        description: 'New test expense',
        amount: 22.99,
        date: new Date('2023-03-19'),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
