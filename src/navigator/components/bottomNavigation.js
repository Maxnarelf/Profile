import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

const BottomNavigation = ({
  route, focused, size, color
}) => {
  let iconName;
  let iconSize = size;
  let iconColor = color;
  if (route.name === 'Home') {
    iconName = 'home';
    iconSize = 20;
    iconColor = focused ? 'goldenrod' : '#815e08';
  } else if (route.name === 'Profile') {
    iconName = 'user-circle';
    iconSize = 20;
    iconColor = focused ? 'goldenrod' : '#815e08';
  } else if (route.name === 'Search') {
    iconName = 'search';
    iconSize = 20;
    iconColor = focused ? 'goldenrod' : '#815e08';
  } else if (route.name === 'Favorite') {
    iconName = 'heart';
    iconSize = 20;
    iconColor = focused ? 'goldenrod' : '#815e08';
  } else if (route.name === 'List') {
    iconName = 'list';
    iconSize = 20;
    iconColor = focused ? 'goldenrod' : '#815e08';
  }
  return (
    <FontAwesome5
      name={iconName}
      size={iconSize}
      color={iconColor}
    />
  );
};

BottomNavigation.propTypes = {
  route: PropTypes.shape(),
  size: PropTypes.number,
  focused: PropTypes.bool,
  color: PropTypes.string
};

BottomNavigation.defaultProps = {
  route: {},
  size: undefined,
  focused: false,
  color: ''
};

export default BottomNavigation;
