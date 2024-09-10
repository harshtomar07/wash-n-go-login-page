import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SplashScreen({ navigation }) {
  return (
    
    
    <View style={styles.container}>
       <View style={styles.topHalf}>
      <Image 
    source={require('../assets/bgImage.png')} 
    style={styles.image}
  />
  </View>
    
     
      <Text style={styles.innerText}>Sparkle & Shine, Transform Your Drive with Every Wash!</Text>
      <View style={styles.button}>
        <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}> 
        <Text style={styles.buttonText}>LET'S START</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signInText} onPress={() => navigation.navigate('SignIn')}>Already have an account? Sign In</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  image: {
    width: 500,   
    height: 350,   
    resizeMode: 'cover',
  },
  topHalf: {
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  
 
  buttonTextText: {
    marginTop: 10,
    color: 'black',
    fontWeight:"bold"
    
  },
  innerText:{
    // flex:.5,
    fontSize:20,
    marginBottom:30,
    // marginStart:10,
    // marginLeft:5,
    marginTop:20,
    fontWeight:"500",
    position : 'absolute',
    
  },
  button:{
    
width:300,
height:50,
fontWeight:"black",
backgroundColor:"skyblue",
borderRadius:20,
marginBottom:12,
justifyContent:"center",
alignItems:"center"

  },
  signInText:{
    flex:.5,
marginBottom:10
  }
});
