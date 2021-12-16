import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigate from './src/navigator/navigate';
import reduxStore from './src/store/store';

const App = () => {
  const { store, persistor } = reduxStore();
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigate />
      </PersistGate>
    </Provider>
  );
};

export default App;
