import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import {
  View, Text, Switch, StyleSheet, SafeAreaView, useColorScheme
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeAppTheme, toggleDeviceTheme } from '../store/theme/actions';

const styles = StyleSheet.create({
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  }
});

const DrawerContent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const { appTheme, deviceTheme } = useSelector(
    ({ appThemeReducer }) => appThemeReducer,
    shallowEqual,
  );
  const currentTheme = appTheme || deviceTheme;
  const isDarkTheme = currentTheme === 'dark';
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="home-outline"
              color={color}
              size={size}
            />
          )}
          label="Home"
          onPress={() => navigation.navigate('Home')}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          )}
          label="List"
          onPress={() => navigation.navigate('List')}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="file-search-outline"
              color={color}
              size={size}
            />
          )}
          label="Search"
          onPress={() => navigation.navigate('Search')}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="heart"
              color={color}
              size={size}
            />
          )}
          label="Favorite"
          onPress={() => navigation.navigate('Favorite')}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="account"
              color={color}
              size={size}
            />
          )}
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="google-maps"
              color={color}
              size={size}
            />
          )}
          label="Map"
          onPress={() => navigation.navigate('Map')}
        />
        <SafeAreaView style={{ backgroundColor: colors.card }}>
          <View style={styles.preference}>
            <Text style={{ color: colors.text }}>Dark Theme</Text>

            <Switch
              trackColor={{ false: '#767577', true: '#767577' }}
              thumbColor={isDarkTheme ? 'goldenrod' : '#f4f3f4'}
              value={isDarkTheme}
              disabled={!!deviceTheme}
              onValueChange={() => (isDarkTheme
                ? dispatch(changeAppTheme('light'))
                : dispatch(changeAppTheme('dark')))}
            />

          </View>
          <View style={styles.preference}>
            <Text style={{ color: colors.text }}>Device Theme</Text>

            <Switch
              trackColor={{ false: '#767577', true: '#767577' }}
              thumbColor={deviceTheme ? 'goldenrod' : '#f4f3f4'}
              value={!!deviceTheme}
              onValueChange={() => (deviceTheme
                ? dispatch(changeAppTheme('light'))
                : dispatch(toggleDeviceTheme(colorScheme)))}
            />

          </View>
        </SafeAreaView>
      </DrawerContentScrollView>

      <DrawerItem
        icon={(color, size) => (
          <Icon
            name="exit-to-app"
            color={color}
            size={size}
          />
        )}
        label="Sign out"
        onPress={() => {}}
      />

    </View>
  );
};

export default DrawerContent;
