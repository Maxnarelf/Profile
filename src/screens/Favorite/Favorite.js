import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

const Favorite = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text
    }
  });
  return (
    <View>
      <Text style={styles.text}>Favorite</Text>
    </View>
  );
};

export default Favorite;
