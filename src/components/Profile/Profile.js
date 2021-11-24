import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

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
  const [name, setName] = useState('Lunyov Sergey');
  const [nameInput, setNameInput] = useState('');
  const [nickname, setNickname] = useState('Maxnar');
  const [nicknameInput, setNicknameInput] = useState('');
  const [bio, setBio] = useState('Люблю спорт, игры');
  const [bioInput, setBioInput] = useState('');
  const img = 'http://img10.reactor.cc/pics/post/alex-malveda-artist-Itachi-Uchiha-Naruto-4138966.jpeg';

  const onClick = () => {
    if (nameInput.length > 0) {
      setName(nameInput);
      setNameInput('');
    }
    if (nicknameInput.length > 0) {
      setNickname(nicknameInput);
      setNicknameInput('');
    }
    if (bioInput.length > 0) {
      setBio(bioInput);
      setBioInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>

        {route?.params?.prevScreen}
      </Text>
      <Main
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
    </View>
  );
};

Profile.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      prevScreen: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
export default Profile;
