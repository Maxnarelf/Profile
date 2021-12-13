import React, { useState, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import {
  setName, setNameInput, setNickname, setNicknameInput, setBio, setBioInput
} from '../../store/profile/actions';
// import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#474747',
    marginLeft: 5,
    marginTop: -26
  }
});

const Profile = ({ route }) => {
  const { name, nickname, bio } = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();
  // const [name, setName] = useState('Lunyov Sergey');
  // const [nameInput, setNameInput] = useState('');
  // const [nickname, setNickname] = useState('Maxnar');
  // const [nicknameInput, setNicknameInput] = useState('');
  // const [bio, setBio] = useState('Люблю спорт, игры');
  // const [bioInput, setBioInput] = useState('');
  const img = 'http://img10.reactor.cc/pics/post/alex-malveda-artist-Itachi-Uchiha-Naruto-4138966.jpeg';

  const onClick = useCallback(
    () => {
      if (nameInput.length > 0) {
        dispatch(setName(nameInput));
        setNameInput('');
      }
      if (nicknameInput.length > 0) {
        dispatch(setNickname(nicknameInput));
        setNicknameInput('');
      }
      if (bioInput.length > 0) {
        dispatch(setBio(bioInput));
        setBioInput('');
      }
    },
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header /> */}
      <Text style={styles.text}>

        {route?.params?.prevScreen}
      </Text>
      <Body
        name={name}
        nameInput={nameInput}
        setNameInput={setNameInput}
        nickname={nickname}
        nicknameInput={nicknameInput}
        setNicknameInput={setNicknameInput}
        bio={bio}
        bioInput={bioInput}
        setBioInput={setBioInput}
        img={img}
      />

      <Footer onClick={onClick} />
    </SafeAreaView>
  );
};

Profile.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      prevScreen: PropTypes.string
    })
  })
};
Profile.defaultProps = {
  route: {}
};
export default Profile;
