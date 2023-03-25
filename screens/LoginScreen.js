import { useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import { LoadingOverlay } from '../components/Auth/LoadingOverlay';
import { login } from '../util/auth';

export const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const logInHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not log you in. PLease check your credentials or try again later!'
      );
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in...." />;
  }

  return <AuthContent isLogin onAuthenticate={logInHandler} />;
};
