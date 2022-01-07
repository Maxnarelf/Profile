import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const gStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({

    header: {
      marginBottom: 30,
    },
    item: {
      width: '100%',
      marginBottom: 30,
    },
    titleBody: {
      fontSize: 22,
      textAlign: 'center',
      marginTop: 20,
      color: colors.text,
      fontWeight: 'bold',
    },
    nickname: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 5,
      color: colors.text,
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
      borderColor: colors.border,
      marginHorizontal: '10%',
      marginVertical: 10,
      height: 50,
      backgroundColor: colors.card,
      color: colors.text

    },
    inputText: {
      color: colors.text,
      opacity: 0.6,

    },
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
    },
    back: {
      width: 30,
      height: 30,
      color: colors.text,
      marginLeft: 10,
      top: 25,
    },
    touch: {
      position: 'absolute'
    },
    titleHeader: {
      position: 'relative',
      fontSize: 30,
      fontWeight: 'bold',
      backgroundColor: 'silver',
      textAlign: 'center',
      paddingVertical: 20,

    },
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
      marginLeft: 5,
      marginTop: -26
    }
  });
};

export default gStyles;
