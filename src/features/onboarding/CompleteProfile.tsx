import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';

import {NadirButton, NadirInputText, TopSpacer} from '../../components';
import {useAppSelector} from '../../config/store';
import {useAppDispatch} from '../../config/store';
import {updateProfile, updateEmail} from './profileStateSlice';

const CompleteProfile = () => {
  const profileSliceData = useAppSelector(state => state.profile);
  const dispatch = useAppDispatch();

  //Initialize component local state
  const [firstName, setFirstName] = useState(profileSliceData.firstName);
  const [lastName, setLastName] = useState(profileSliceData.lastName);
  const [email, setEmail] = useState(profileSliceData.email);

  const onSaveProfile = () => {
    dispatch(updateProfile({firstName, lastName, email}));
  };
  const onClearInput = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  };
  const onReload = () => {
    setFirstName(profileSliceData.firstName);
    setLastName(profileSliceData.lastName);
    setEmail(profileSliceData.email);
  };
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundContainer}>
        <View>
          <NadirInputText
            label={'First Name'}
            value={firstName}
            placeholder="Write your first name"
            onChangeText={text => setFirstName(text)}
          />
          <NadirInputText
            label={'Last Name'}
            value={lastName}
            placeholder="Write your last name"
            style={styles.input}
            onChangeText={text => setLastName(text)}
          />
          <NadirInputText
            label={'Email'}
            value={email}
            placeholder="Write your email"
            style={styles.input}
            onChangeText={email => setEmail(email)}
          />
          <TopSpacer space={100} />
          <NadirButton onPress={onSaveProfile}>Save to Redux Store</NadirButton>
          <TopSpacer space={10} />
          <NadirButton onPress={onClearInput}>Clear Input</NadirButton>
          <TopSpacer space={10} />
          <NadirButton onPress={onReload}>Reload Stored Profile</NadirButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  input: {
    marginTop: 10,
  },
  saveButton: {
    marginTop: 50,
  },
});

export default CompleteProfile;
