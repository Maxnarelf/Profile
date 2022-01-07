import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const Light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(242, 242, 242)',
    card: 'rgb(229, 229, 229)',
    text: '#474747',
    border: 'black'

  }
};
export const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'black',
    card: '#303f52',
    text: 'goldenrod',
    border: 'lightblue'

  }
};
