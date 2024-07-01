import { useGetProductByIdQuery } from "./productsService";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
  } from 'react-native';

  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

const Product = () => {
  const { data: product, isLoading } = useGetProductByIdQuery(1);

  const backgroundStyle = {
    backgroundColor:  Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
    <StatusBar
      barStyle={ 'light-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={{
          backgroundColor:  Colors.white,
        }}>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Fetch Products</Text>
          </TouchableOpacity>
      
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    buttonContainer:{
      backgroundColor:"#000000",
      width:200,
      height:40,
      borderRadius:10,
      alignSelf:"center",
      marginTop:10,
      justifyContent:"center",
    },
  
    buttonText: {
      fontSize: 18,
      textAlign:"center",
      color:"#FFFFFF"
    },
   
  });
  

export default Product;
