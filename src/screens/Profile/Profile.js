import React, { useCallback } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch, batch } from 'react-redux';
import {
  setName, setNameInput, setNickname, setNicknameInput, setBio, setBioInput
} from '../../store/profile/actions';
import Body from './components/Body';
import Footer from './components/Footer';
import gStyles from './styles';

const Profile = ({ route }) => {
  const {
    nameInput, nicknameInput, bioInput
  } = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();
  const styles = gStyles();
  const onClick = useCallback(
    () => {
      if (nameInput.length > 0) {
        batch(() => {
          dispatch(setName(nameInput));
          dispatch(setNameInput(''));
        });
      }
      if (nicknameInput.length > 0) {
        batch(() => {
          dispatch(setNickname(nicknameInput));
          dispatch(setNicknameInput(''));
        });
      }
      if (bioInput.length > 0) {
        batch(() => {
          dispatch(setBio(bioInput));
          dispatch(setBioInput(''));
        });
      }
    },
    [nameInput, nicknameInput, bioInput]
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header /> */}
      <Text style={styles.text}>
        {route?.params?.prevScreen}
      </Text>
      <Body />

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
