import { StyleSheet } from 'react-native';

const bodyStyles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747',
    fontWeight: 'bold',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginHorizontal: '25%',
    marginTop: 25,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: '10%',
    marginVertical: 10,
    height: 50,
  },
});

export default bodyStyles;
