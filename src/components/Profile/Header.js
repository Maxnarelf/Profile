import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'silver',
    textAlign: 'center',
    paddingVertical: 20,

  }
});

const Header = () => {
  return (
    <View>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

export default Header;
