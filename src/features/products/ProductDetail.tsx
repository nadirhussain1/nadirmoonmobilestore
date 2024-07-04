import {useLazyGetProductByIdQuery} from './productsAPISlice';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const ProductDetail = () => {
  const [getProductById, {data, isFetching, isError}] =
    useLazyGetProductByIdQuery();

  const onFetchPress = () => {
    getProductById(1);
  };
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onFetchPress}>
            <Text style={styles.buttonText}>Fetch Product</Text>
          </TouchableOpacity>

          {isFetching && <Text style={styles.fetching}>Fetching...</Text>}

          {isError && <Text style={styles.error}>Found Error</Text>}

          {!isFetching && data && (
            <Text style={styles.data}>{JSON.stringify(data)}</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#000000',
    width: 200,
    height: 40,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  fetching: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    marginTop: 20,
  },

  error: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FF0000',
    marginTop: 20,
  },

  data: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000000',
    marginTop: 20,
  },
});

export default ProductDetail;
