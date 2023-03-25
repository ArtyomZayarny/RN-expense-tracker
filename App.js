import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthContextProvider } from './context/auth-context';

import { ExpenseContextProvider } from './context/expense-context';
import { AuthStack } from './navigation/AuthStack';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <ExpenseContextProvider>
          <NavigationContainer>
            <AuthStack />
          </NavigationContainer>
        </ExpenseContextProvider>
      </AuthContextProvider>
    </>
  );
}
