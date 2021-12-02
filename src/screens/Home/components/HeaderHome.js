import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#303f52',
    textAlign: 'center',
    paddingVertical: 20,
    color: 'goldenrod',

  }
});

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReactMovies</Text>
    </View>
  );
};

export default HeaderHome;
