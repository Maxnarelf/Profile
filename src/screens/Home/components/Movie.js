import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  listContainer: {
    width: '48%',
    backgroundColor: 'lightblue',
    margin: 3
  },
  IMG_API: {
    height: 300,
    width: '100%',
  },
  listText: {
    flex: 1,
    flexDirection: 'row',
    padding: 3,
    width: '100%',
    alignItems: 'center'

  },
  listTextTitle: {

    fontSize: 16,
    width: '80%',
    textAlign: 'center',
    fontWeight: '700',
    color: 'black'

  },
  listTextVote: {

    fontSize: 20,
    width: '20%',
    fontWeight: '700',
    textAlign: 'center',

  }
});

const IMG_API = 'https://image.tmdb.org/t/p/w500';

const Movie = ({ item }) => {
  const {
    title, poster_path: posterPath, vote_average: voteAverage
  } = item;
  return (
    <View style={styles.listContainer}>
      <Image style={styles.IMG_API} source={{ uri: IMG_API + posterPath }} />
      <View style={styles.listText}>
        <Text style={styles.listTextTitle}>{title}</Text>
        <Text style={styles.listTextVote}>{voteAverage}</Text>
      </View>
    </View>
  );
};

export default Movie;

Movie.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
  }).isRequired,

};
