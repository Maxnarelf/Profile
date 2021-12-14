import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
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

export default headerStyles;
