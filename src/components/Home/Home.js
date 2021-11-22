import React, { useState } from 'react';
import {
  StyleSheet, View, TouchableOpacity, FlatList, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileSvg from '../../assets/icons/ProfileSvg.svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 30,
    borderWidth: 4,
    borderColor: 'yellow'
  },

  item: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 160,
  },
  itemMenu: {
    width: 80,
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
    width: 80,
    height: 80,
    borderRadius: 80,
    // paddingHorizontal: 10,

  }
});
const Home = () => {
  const navigation = useNavigation();
  const [news] = useState([
    {
      name: 'Google',
      anons: 'Google!!!',
      full: 'Google is cool',
      key: '1',
      img: 'https://i.pinimg.com/736x/cc/12/f0/cc12f022a84e9fc25cd7facdb0749ae1.jpg'
    }
  ]);
  return (
    <View style={styles.container}>
      {/* <IconSvgProfile /> */}

      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile', item)}>
            <Image style={styles.img} source={{ uri: item.img }} />

          </TouchableOpacity>

        )}
      />
      <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('Profile', news)}>
        <Image
          style={styles.img}
          source={{ uri: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg' }}
        />
      </TouchableOpacity>

      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('Profile', item)} />
        )}
      />
      <ProfileSvg width={60} height={60} />
    </View>

  );
};

export default Home;
