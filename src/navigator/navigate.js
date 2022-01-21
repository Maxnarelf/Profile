import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import TabNavigation from './TabNavigation';
import DrawerContent from './DrawerContent';
import Map from '../screens/Map/Map';
import { Light, Dark } from '../theme/theme';
import { toggleDeviceTheme } from '../store/theme/actions';

const Drawer = createDrawerNavigator();

const Navigate = () => {
  const colorScheme = useColorScheme();
  const { appTheme, deviceTheme } = useSelector(
    ({ appThemeReducer }) => appThemeReducer,
    shallowEqual,
  );
  const dispatch = useDispatch();
  const currentTheme = appTheme || deviceTheme;
  const isDarkTheme = currentTheme === 'dark';
  useEffect(() => {
    if (deviceTheme) {
      dispatch(toggleDeviceTheme(colorScheme));
    }
  }, [deviceTheme]);
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
        <Drawer.Screen
          name="Map"
          component={Map}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
