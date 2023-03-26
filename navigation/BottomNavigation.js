import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/auth-context';
import { GlobalStyles } from '../constants/style';
import AllExpenses from '../screens/AllExpenses';
import RecentExpenses from '../screens/RecentExpenses';
import { IconButton } from '../components/UI/IconButton';
import { useContext } from 'react';

const BottomTabs = createBottomTabNavigator();

export const ExpensesOverview = () => {
  const AuthCtx = useContext(AuthContext);
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.color.primary500,
        },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GlobalStyles.color.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.color.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            color={tintColor}
            size={24}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          headerLeft: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={AuthCtx.logout}
            />
          ),
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
        name="AllExpenses"
        component={AllExpenses}
      />
    </BottomTabs.Navigator>
  );
};
