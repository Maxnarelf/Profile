import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgBack from '../../assets/icons/arrow-left-solid.svg';

const styles = StyleSheet.create({
  back: {
    width: 30,
    height: 30,
    color: '#474747',
    marginLeft: 10,
    top: 25,
  },
  touch: {
    position: 'absolute'
  },
  title: {
    position: 'relative',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'silver',
    textAlign: 'center',
    paddingVertical: 20,

  }
});

const Header = () => {
  const navigation = useNavigation();
  const back = useCallback(
    () => {
      navigation?.goBack();
    },
    []
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity style={styles.touch} onPress={back}>
        <SvgBack style={styles.back} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
