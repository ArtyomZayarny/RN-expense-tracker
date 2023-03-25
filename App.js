import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { ExpenseContextProvider } from './context/expense-context';
import { AuthStack } from './navigation/AuthStack';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}
