import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'serif',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
    fontWeight: 'bold',
  },
  nickname: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747',
    fontWeight: 'bold',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginHorizontal: '25%',
    marginTop: 25,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: '10%',
    marginVertical: 10,
    height: 50,
  },
});
const Main = ({
  name,
  setInput1,
  nickname,
  setInput2,
  bio,
  setInput3,
  img,
}) => {
  return (
    <ScrollView>
      <View style={styles.item}>
        <Image style={styles.img} source={{uri: img}} />
        <Text style={styles.title}>Name: {name}</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите имя для изменения"
          onChangeText={value => setInput1(value)}
        />
        <Text style={styles.nickname}>Nickname: {nickname}</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите nickname что бы изменить"
          onChangeText={value => setInput2(value)}
        />
        <Text style={styles.nickname}>Bio: {bio}</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Введите информацию о себе"
          onChangeText={value => setInput3(value)}
        />
      </View>
    </ScrollView>
  );
};

// Main.propTypes = {

//     text: PropTypes.string,
//     key: PropTypes.string,
//   }).isRequired,
//   deleteItem: PropTypes.func.isRequired,
export default Main;
