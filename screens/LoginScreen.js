import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import { LoadingOverlay } from '../components/Auth/LoadingOverlay';
import { AuthContext } from '../context/auth-context';
import { login } from '../util/auth';

export const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const AuthCtx = useContext(AuthContext);

  const logInHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      AuthCtx.authenticate(token);
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
