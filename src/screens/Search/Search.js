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

const Search = () => {
  return (
    <View>
      <Text style={styles.text}>Search</Text>
    </View>
  );
};

export default Search;
