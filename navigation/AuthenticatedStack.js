import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { IconButton } from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/style';
import ManageExpense from '../screens/ManageExpense';
import { ExpensesOverview } from './BottomNavigation';

const Stack = createNativeStackNavigator();

export const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.color.primary500 },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="ExpensesOverview"
        component={ExpensesOverview}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};
