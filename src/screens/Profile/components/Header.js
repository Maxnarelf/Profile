import React, { useCallback } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgBack from '../../../assets/icons/arrow-left-solid.svg';
import styles from '../styles';

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
      <Text style={styles.titleHeader}>Profile</Text>
      <TouchableOpacity style={styles.touch} onPress={back}>
        <SvgBack style={styles.back} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
