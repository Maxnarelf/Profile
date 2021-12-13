import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import Navigate from './src/navigator/navigate';
import { Store } from './src/store/store';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return (
    <Provider store={Store}>
      <Navigate />
    </Provider>
  );
};

export default App;
