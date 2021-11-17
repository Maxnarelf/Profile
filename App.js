import React, {useState} from 'react';
import Header from './src/components/Header';
import Main from './src/components/Main';
import Footer from './src/components/Footer';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const App = () => {
  const [name, setName] = useState('Lunyov Sergey');
  const [input1, setInput1] = useState('');
  const [nickname, setNickname] = useState('Maxnar');
  const [input2, setInput2] = useState('');
  const [bio, setBio] = useState('Люблю спорт, игры');
  const [input3, setInput3] = useState('');
  const img =
    'http://img10.reactor.cc/pics/post/alex-malveda-artist-Itachi-Uchiha-Naruto-4138966.jpeg';

  const onClick = () => {
    if (input1.length > 0) {
      setName(input1);
      } else {
      name;
    }
    if (input2.length > 0) {
      setNickname(input2);
    } else {
      nickname;
    }
    if (input3.length > 0) {
      setBio(input3);
    } else {
      bio;
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Main
        name={name}
        setInput1={setInput1}
        nickname={nickname}
        setInput2={setInput2}
        bio={bio}
        setInput3={setInput3}
        img={img}
      />
      <Footer onClick={onClick} />
    </View>
  );
};

export default App;
