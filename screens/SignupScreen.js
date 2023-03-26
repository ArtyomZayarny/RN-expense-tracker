import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { LoadingOverlay } from '../components/Auth/LoadingOverlay';
import { AuthContext } from '../context/auth-context';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';

export const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const AuthCtx = useContext(AuthContext);

  const signUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      AuthCtx.authenticate(token);
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
