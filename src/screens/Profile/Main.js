import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
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
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
    fontWeight: 'bold',
  },
  nickname: {
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
  nameInput,
  setNameInput,
  nickname,
  nicknameInput,
  setNicknameInput,
  bio,
  bioInput,
  setBioInput,
  img,
}) => {
  return (
    <ScrollView>
      <View style={styles.item}>
        <Image style={styles.img} source={{ uri: img }} />
        <Text style={styles.title}>
          Name:
          {name}
        </Text>
        <TextInput
          style={styles.input}
          value={nameInput}
          placeholder="Введите имя для изменения"
          onChangeText={setNameInput}
        />
        <Text style={styles.nickname}>
          Nickname:
          {nickname}
        </Text>
        <TextInput
          style={styles.input}
          value={nicknameInput}
          placeholder="Введите nickname для изменения"
          onChangeText={setNicknameInput}
        />
        <Text style={styles.nickname}>
          Bio:
          {bio}
        </Text>
        <TextInput
          multiline
          style={styles.input}
          value={bioInput}
          placeholder="Введите информацию о себе"
          onChangeText={setBioInput}
        />
      </View>
    </ScrollView>
  );
};

Main.propTypes = {
  name: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  setNameInput: PropTypes.func.isRequired,
  nickname: PropTypes.string.isRequired,
  nicknameInput: PropTypes.string.isRequired,
  setNicknameInput: PropTypes.func.isRequired,
  bio: PropTypes.string.isRequired,
  bioInput: PropTypes.string.isRequired,
  setBioInput: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};
export default Main;
