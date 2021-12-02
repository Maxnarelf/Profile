import React from 'react';
import {
  ImageBackground,
  StyleSheet
} from 'react-native';
// import HomeNavigation from './components/HomeNavigation';
import HeaderHome from './components/HeaderHome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
const Home = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: 'https://mobimg.b-cdn.net/v3/fetch/b0/b029ca34284a080eb5c509994966d6f1.jpeg' }}
    >
      <HeaderHome />
      {/* <HomeNavigation /> */}
    </ImageBackground>

  );
};

export default Home;
