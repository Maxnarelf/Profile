import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import Navigate from './src/navigator/navigate';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return (
    <Navigate />

  );
};

export default App;
