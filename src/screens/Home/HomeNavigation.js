import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgProfile from '../../assets/icons/user-circle-solid.svg';
import SvgSearch from '../../assets/icons/search-solid.svg';
import SvgFavorite from '../../assets/icons/heart-regular.svg';
import SvgList from '../../assets/icons/list-alt-regular.svg';
import SvgHome from '../../assets/icons/home-solid.svg';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  item: {
    width: 80,
    alignItems: 'center',
  },
  text: {
    color: 'goldenrod'
  }
});
const HomeNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeContainer}>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
        <SvgHome width={40} height={40} color="goldenrod" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
        <SvgList width={40} height={40} color="goldenrod" />
        <Text style={styles.text}>List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
        <SvgSearch width={40} height={40} color="goldenrod" />
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
        <SvgFavorite width={40} height={40} color="goldenrod" />
        <Text style={styles.text}>Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile', { prevScreen: 'Home' })}>
        <SvgProfile width={40} height={40} color="goldenrod" />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>

    </View>

  );
};

export default HomeNavigation;
