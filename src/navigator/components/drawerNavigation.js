import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home/Home';
import Profile from '../../screens/Profile/Profile';
import Search from '../../screens/Search/Search';
import Favorite from '../../screens/Favorite/Favorite';
import List from '../../screens/List/List';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
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
  );
};

export default DrawerNavigation;
