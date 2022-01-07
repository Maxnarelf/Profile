import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import gStyles from '../styles';

const Footer = ({ onClick }) => {
  const styles = gStyles();
  return (
    <TouchableOpacity style={styles.btn} onPress={onClick}>
      <Text style={styles.btn_text}>Сохранить изменения</Text>
    </TouchableOpacity>
  );
};

Footer.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Footer;
