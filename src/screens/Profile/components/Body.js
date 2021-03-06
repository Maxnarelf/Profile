import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import {
  setNameInput, setNicknameInput, setBioInput
} from '../../../store/profile/actions';
import gStyles from '../styles';

const Body = () => {
  const {
    name, nameInput, nickname, nicknameInput, bio, bioInput
  } = useSelector((state) => state.profileReducer);
  const img = 'http://img10.reactor.cc/pics/post/alex-malveda-artist-Itachi-Uchiha-Naruto-4138966.jpeg';
  const dispatch = useDispatch();
  const styles = gStyles();
  const { colors } = useTheme();
  return (
    <ScrollView>
      <View style={styles.item}>
        <Image style={styles.img} source={{ uri: img }} />
        <Text style={styles.titleBody}>
          Name:
          {name}
        </Text>
        <TextInput
          style={styles.input}
          value={nameInput}
          placeholder="Введите имя для изменения"
          placeholderStyles={styles.inputText}
          placeholderTextColor={colors.text}
          onChangeText={(value) => dispatch(setNameInput(value))}
        />
        <Text style={styles.nickname}>
          Nickname:
          {nickname}
        </Text>
        <TextInput
          style={styles.input}
          value={nicknameInput}
          placeholder="Введите nickname для изменения"
          placeholderTextColor={colors.text}
          onChangeText={(value) => dispatch(setNicknameInput(value))}
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
          placeholderTextColor={colors.text}
          onChangeText={(value) => dispatch(setBioInput(value))}
        />
      </View>
    </ScrollView>
  );
};

export default Body;
