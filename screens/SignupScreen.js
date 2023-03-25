import { useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import { LoadingOverlay } from '../components/Auth/LoadingOverlay';
import { createUser } from '../util/auth';

export const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user. PLease check your inputs or try again later!'
      );
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user...." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
};
