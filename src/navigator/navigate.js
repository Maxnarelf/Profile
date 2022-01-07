import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { shallowEqual, useSelector } from 'react-redux';
import TabNavigation from './TabNavigation';
import DrawerContent from './DrawerContent';
import { Light, Dark } from '../theme/theme';

const Drawer = createDrawerNavigator();

const Navigate = () => {
  const scheme = useColorScheme();
  const { appTheme } = useSelector(
    ({ appThemeReducer }) => appThemeReducer,
    shallowEqual,
  );
  const currentTheme = appTheme || scheme;
  const isDarkTheme = currentTheme === 'dark';
  return (
    <NavigationContainer theme={isDarkTheme ? Dark : Light}>
      <Drawer.Navigator
        drawerContent={() => <DrawerContent />}
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

        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
