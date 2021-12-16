import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Search from '../screens/Search/Search';
import Favorite from '../screens/Favorite/Favorite';
import List from '../screens/List/List';
import BottomNavigationIcon from '../components/BottomNavigationIcon/BottomNavigationIcon';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => null,
        tabBarIcon: ({ focused, size, color }) => (
          <BottomNavigationIcon route={route} focused={focused} size={size} color={color} />
        )
      })}
      activeColor="goldenrod"
      inactiveColor="#815e08"
      barStyle={{ backgroundColor: '#303f52' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="List"
        component={List}
      />
      <Tab.Screen
        name="Search"
        component={Search}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />

    </Tab.Navigator>
  );
};

export default TabNavigator;
