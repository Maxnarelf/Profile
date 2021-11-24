import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/Home/Home';
import Profile from './src/components/Profile/Profile';

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: () => null }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
