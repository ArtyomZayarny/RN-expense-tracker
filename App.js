import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { AuthContext, AuthContextProvider } from './context/auth-context';

import { ExpenseContextProvider } from './context/expense-context';
import { AuthenticatedStack } from './navigation/AuthenticatedStack';
import { AuthStack } from './navigation/AuthStack';

const Navigation = () => {
  const AuthCtx = useContext(AuthContext);
  return (
    <ExpenseContextProvider>
      <NavigationContainer>
        {!AuthCtx.isAuthenticated && <AuthStack />}
        {AuthCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
    </ExpenseContextProvider>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
