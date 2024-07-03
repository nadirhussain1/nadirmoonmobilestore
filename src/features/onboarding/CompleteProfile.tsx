import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NadirButton, NadirInputText, TopSpacer} from '../../components';

const CompleteProfile = () => {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundContainer}>
        <View>
          <NadirInputText
            label={'First Name'}
            placeholder="Write your first name"
          />
          <NadirInputText
            label={'Last Name'}
            placeholder="Write your last name"
            style={styles.input}
          />
          <NadirInputText
            label={'Email'}
            placeholder="Write your email"
            style={styles.input}
          />
          <TopSpacer space={100} />
          <NadirButton> Save Profile</NadirButton>
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
