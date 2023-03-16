import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useNavigation } from '@react-navigation/native';

const ManageExpense = ({ route }) => {
  const navigation = useNavigation();
  const id = route.params?.expenseId;

  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default ManageExpense;
