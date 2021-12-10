import React from 'react';
import {
  ImageBackground,
  StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import HomeNavigation from './components/HomeNavigation';

// import HeaderHome from './components/HeaderHome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  iew: {
    flex: 1
  }
});
const Home = () => {
  return (

    <ImageBackground
      style={styles.container}
      source={{ uri: 'https://mobimg.b-cdn.net/v3/fetch/b0/b029ca34284a080eb5c509994966d6f1.jpeg' }}
    >
      <SafeAreaView style={styles.iew}>
        {/* <HeaderHome /> */}
        {/* <HomeNavigation /> */}
      </SafeAreaView>
    </ImageBackground>

  );
};

export default Home;
