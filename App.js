import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Main from './src/components/Main';
import Footer from './src/components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const App = () => {
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
      <Main
        name={name}
        setNameInput={setNameInput}
        nickname={nickname}
        setNicknameInput={setNicknameInput}
        bio={bio}
        setBioInput={setBioInput}
        img={img}
      />
      <Footer onClick={onClick} />
    </View>
  );
};

export default App;
