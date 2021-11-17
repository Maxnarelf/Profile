import React from 'react';
import PropTypes from 'prop-types';
import { 
  StyleSheet,
  Text, 
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'lightblue',
    width: '80%',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'darkblue',
    marginHorizontal: '10%',
    marginTop: 10,
    marginBottom: 20,
  },
  btn_text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
  }
});

// eslint-disable-next-line react/function-component-definition
const Footer = ({onClick}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onClick}>
      <Text style={styles.btn_text}>Сохранить изменения</Text>
    </TouchableOpacity>
  );
};




export default Footer;
