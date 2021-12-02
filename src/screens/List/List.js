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

const List = () => {
  return (
    <View>
      <Text style={styles.text}>List</Text>
    </View>
  );
};

export default List;
