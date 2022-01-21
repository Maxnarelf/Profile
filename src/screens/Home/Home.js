import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Movie from './components/Movie';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const POPULARITY_API = 'https://api.themoviedb.org/3/discover'
+ '/movie?sort_by=popularity.desc&api_key=cc194d060181fb880eda7d9ca2f77ad3&page=1';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(POPULARITY_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://mobimg.b-cdn.net/v3/fetch/b0/b029ca34284a080eb5c509994966d6f1.jpeg' }}
      >
        <View>
          <FlatList
            numColumns={2}
            data={movies}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Movie item={item} />
            )}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>

  );
};

export default Home;
