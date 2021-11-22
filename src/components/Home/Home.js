import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgProfile from '../../assets/icons/user-circle-solid.svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 30,
    // borderWidth: 4,
    // borderColor: 'yellow'
  },

  item: {
    width: 40,
    borderRadius: 40,
  },
  itemMenu: {
    width: 40,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 80,

  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    // paddingHorizontal: 10,

  }
});
const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SvgProfile width={60} height={60} />
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
        <Image style={styles.img} source={{ uri: 'https://pics.freeicons.io/uploads/icons/png/5441156781530273523-512.png' }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
        <Image style={styles.img} source={{ uri: 'https://pics.freeicons.io/uploads/icons/png/13416400251535694869-512.png' }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
        <Image style={styles.img} source={{ uri: 'https://pics.freeicons.io/uploads/icons/png/117199341543238913-512.png' }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
        <Image style={styles.img} source={{ uri: 'https://pics.freeicons.io/uploads/icons/png/3895539931556258249-512.png' }} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('Profile')}>
        <Image
          style={styles.img}
          source={{ uri: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg' }}
        />
      </TouchableOpacity>

    </View>

  );
};

export default Home;
