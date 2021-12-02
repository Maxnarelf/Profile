import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

const Favorite = () => {
  return (
    <View>
      <Text style={styles.text}>Favorite</Text>
    </View>
  );
};

export default Favorite;
