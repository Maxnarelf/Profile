import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from '../screens/Home/Home';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Profile from '../screens/Profile/Profile';
import Search from '../screens/Search/Search';
import Favorite from '../screens/Favorite/Favorite';
import List from '../screens/List/List';
// import BottomNavigation from './components/bottomNavigation';
import TabNavigation from './components/TabNavigation';

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigation /> */}
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center'
        }}
      >
        <Drawer.Screen
          name="Home page"
          component={TabNavigation}
          options={{
            drawerIcon: () => (
              <FontAwesome5
                name="home"
                size={20}
              />
            )
          }}
        />
        <Drawer.Screen
          name="List"
          component={List}
          options={{
            drawerIcon: () => (
              <FontAwesome5
                name="list"
                size={20}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Search"
          component={Search}
          options={{
            drawerIcon: () => (
              <FontAwesome5
                name="search"
                size={20}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Favorite"
          component={Favorite}
          options={{
            drawerIcon: () => (
              <FontAwesome5
                name="heart"
                size={20}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: () => (
              <FontAwesome5
                name="user-circle"
                size={20}
              />
            )
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
