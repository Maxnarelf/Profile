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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: '#708090',
    margin: 3
  },
  IMG_API: {
    height: 100,
    width: 70,
  },
  listText: {
    flex: 1,
    margin: 5,
  },
  listTextTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black'

  },
  listTextVote: {
    fontSize: 14,
    fontWeight: '700',
  },
  listTextOver: {
    fontSize: 12,
    color: 'black',
    fontWeight: '600'
  },
});

const IMG_API = 'https://image.tmdb.org/t/p/w500';

const ItemList = ({ item }) => {
  const {
    title, poster_path: posterPath, overview, vote_average: voteAverage
  } = item;
  return (
    <View style={styles.listContainer}>
      <Image style={styles.IMG_API} source={{ uri: IMG_API + posterPath }} />
      <View style={styles.listText}>
        <Text style={styles.listTextTitle}>{title}</Text>
        <Text style={styles.listTextVote}>
          Rate:
          {voteAverage}
        </Text>
        <Text style={styles.listTextOver}>
          {overview.length > 150
            ? `${overview.slice(0, 150)}….`
            : overview}
        </Text>
      </View>
    </View>
  );
};

export default ItemList;

ItemList.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
  }).isRequired,

};
