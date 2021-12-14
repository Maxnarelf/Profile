import React, { useCallback } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgBack from '../../../assets/icons/arrow-left-solid.svg';
import headerStyles from './styles/headerStyles';

const Header = () => {
  const navigation = useNavigation();
  const back = useCallback(
    () => {
      navigation?.goBack();
    },
    []
  );
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>Profile</Text>
      <TouchableOpacity style={headerStyles.touch} onPress={back}>
        <SvgBack style={headerStyles.back} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
