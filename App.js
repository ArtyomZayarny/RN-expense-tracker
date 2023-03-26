import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { AuthContext, AuthContextProvider } from './context/auth-context';
import AppLoading from 'expo-app-loading';
import { ExpenseContextProvider } from './context/expense-context';
import { AuthenticatedStack } from './navigation/AuthenticatedStack';
import { AuthStack } from './navigation/AuthStack';

const Navigation = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const AuthCtx = useContext(AuthContext);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        AuthCtx.authenticate(token);
      }
      setIsTryingLogin(false);
    };

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }
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
