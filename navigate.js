import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/Home/Home';
import Profile from './src/components/Profile/Profile';

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              title: 'Home page',
              headerStyle: { backgroundColor: '#eb5d3d', height: 100 },
              headerTitleStyle: { fontWeight: '500' },
              headerTitleAlign: 'center'
            }
          }
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Back' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
