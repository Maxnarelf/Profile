import React from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  setNameInput, setNicknameInput, setBioInput
} from '../../../store/profile/actions';
import bodyStyles from './styles/bodyStyles';

const Body = () => {
  const {
    name, nameInput, nickname, nicknameInput, bio, bioInput
  } = useSelector((state) => state.profileReducer);
  const img = 'http://img10.reactor.cc/pics/post/alex-malveda-artist-Itachi-Uchiha-Naruto-4138966.jpeg';
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View style={bodyStyles.item}>
        <Image style={bodyStyles.img} source={{ uri: img }} />
        <Text style={bodyStyles.title}>
          Name:
          {name}
        </Text>
        <TextInput
          style={bodyStyles.input}
          value={nameInput}
          placeholder="Введите имя для изменения"
          onChangeText={(value) => dispatch(setNameInput(value))}
        />
        <Text style={bodyStyles.nickname}>
          Nickname:
          {nickname}
        </Text>
        <TextInput
          style={bodyStyles.input}
          value={nicknameInput}
          placeholder="Введите nickname для изменения"
          onChangeText={(value) => dispatch(setNicknameInput(value))}
        />
        <Text style={bodyStyles.nickname}>
          Bio:
          {bio}
        </Text>
        <TextInput
          multiline
          style={bodyStyles.input}
          value={bioInput}
          placeholder="Введите информацию о себе"
          onChangeText={(value) => dispatch(setBioInput(value))}
        />
      </View>
    </ScrollView>
  );
};

// Body.propTypes = {
//   name: PropTypes.string.isRequired,
//   nameInput: PropTypes.string.isRequired,
//   setNameInput: PropTypes.func.isRequired,
//   nickname: PropTypes.string.isRequired,
//   nicknameInput: PropTypes.string.isRequired,
//   setNicknameInput: PropTypes.func.isRequired,
//   bio: PropTypes.string.isRequired,
//   bioInput: PropTypes.string.isRequired,
//   setBioInput: PropTypes.func.isRequired,
//   img: PropTypes.string.isRequired,
// };
export default Body;
