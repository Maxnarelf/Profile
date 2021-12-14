import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import footerStyles from './styles/footerStyles';

const Footer = ({ onClick }) => {
  return (
    <TouchableOpacity style={footerStyles.btn} onPress={onClick}>
      <Text style={footerStyles.btn_text}>Сохранить изменения</Text>
    </TouchableOpacity>
  );
};

Footer.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Footer;
