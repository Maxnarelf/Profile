import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  SectionList,
  Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemList from './components/ItemList';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#494d4e',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'goldenrod',
    color: '#494d4e',
  }
});
const POPULARITY_API = 'https://api.themoviedb.org/3/discover'
+ '/movie?sort_by=popularity.desc&api_key=cc194d060181fb880eda7d9ca2f77ad3&page=1';
const TOPRATE = 'https://api.themoviedb.org/3/movie'
+ '/top_rated?api_key=cc194d060181fb880eda7d9ca2f77ad3&language=en-US&page=1';

const List = () => {
  const [movies, setMovies] = useState([]);
  const [rates, setRates] = useState([]);
  useEffect(() => {
    fetch(POPULARITY_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    fetch(TOPRATE)
      .then((res) => res.json())
      .then((data) => {
        setRates(data.results);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>

      <SectionList
        sections={[
          { title: 'POPULARITY', data: movies },
          { title: 'TOPRATE', data: rates }
        ]}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ItemList key={item.id} item={item} />
        )}
        renderSectionHeader={({ section }) => (
          <View>
            <Text style={styles.titleText}>{section.title}</Text>
          </View>
        )}
      />

    </SafeAreaView>

  );
};

export default List;
