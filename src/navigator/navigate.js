import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PropTypes from 'prop-types';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Search from '../screens/Search/Search';
import Favorite from '../screens/Favorite/Favorite';
import List from '../screens/List/List';
import BottomNavigation from './components/bottomNavigation';
// import DrawerNavigation from './components/drawerNavigation';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigation /> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          header: () => null,
          tabBarIcon: ({ focused, size, color }) => (
            <BottomNavigation route={route} focused={focused} size={size} color={color} />
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
    </NavigationContainer>
  );
};

export default Navigate;
