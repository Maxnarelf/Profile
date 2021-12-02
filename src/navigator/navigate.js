import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PropTypes from 'prop-types';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Search from '../screens/Search/Search';
import Favorite from '../screens/Favorite/Favorite';
import List from '../screens/List/List';
// import BottomNavigation from './components/bottomNavigation';
// import DrawerNavigation from './components/drawerNavigation';

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigation /> */}
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          name="List"
          component={List}
        />
        <Drawer.Screen
          name="Search"
          component={Search}
        />
        <Drawer.Screen
          name="Favorite"
          component={Favorite}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
