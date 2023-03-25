import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobalStyles } from '../constants/style';
import { LoginScreen } from '../screens/LoginScreen';
import { SignupScreen } from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.color.primary500 },
        headerTintColor: 'white',
        contentStyle: {
          backgroundColor: GlobalStyles.color.primary200,
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
