import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile/Profile';
import Search from '../screens/Search/Search';
import Favorite from '../screens/Favorite/Favorite';
import List from '../screens/List/List';
import TabNavigation from './components/TabNavigation';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import PropTypes from 'prop-types';
// import Home from '../screens/Home/Home';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import BottomNavigation from './components/bottomNavigation';

// const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigation /> */}
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#303f52'
          },
          headerTintColor: 'goldenrod'
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
