import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity, Image} from 'react-native';
import axios from 'axios';

export default function SignInScreen({ navigation }) {
  const [ email ,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
   
      const response = await axios.post('https://tor.appdevelopers.mobi/api/login', {
       email,
        password
      });
     if (response.data.success) {
        navigation.navigate('Welcome');
      } else {
        alert('Login Failed');
   
  }
}

  return (
    
    <View style={styles.container}>
        <View style={styles.topHalf}>
      <Image 
    source={require('../assets/bgImage.png')} 
    style={styles.image}
  />
  </View>
      <Text style={styles.title}>Sign In 
       
      </Text>
      <View style={ styles.title}>
      <Text style={styles.innerTitle}> HI! Welcome back, you have been missed</Text></View>
      <Text style={{fontWeight:"bold",color:"black"}}  >email</Text>
      <TextInput
        placeholder="xyz@gmail.com"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
       <Text style={{fontWeight:"bold",color:"black"}} >password</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <View>
        <Text style={styles.forgot}>forgot password?</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Welcome')}> 
        <Text style={styles.buttonText}>SignIn</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>or</Text>
      <Text style={styles.linkText} onPress={() => navigation.navigate('SignUp')}>Don't have an account? Sign Up</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',   
    height: 350,   
    resizeMode: 'cover',
  },
  topHalf: {
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:100,
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:"#fff"
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    
    textAlign: 'left',
    fontWeight : 'bold',
  },
  input: {
    
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
  linkText: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
  innerTitle:{
    fontSize: 20,
    paddingBottom:25,
   marginRight:150,
   color:"black",
   fontWeight:"400"
  
    
  },
  button:{
    width:350,
    height:50,
    fontWeight:"bold",
    color:"black",
    backgroundColor:"skyblue",
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center"
  },
  forgot:{
paddingBottom:10,
marginLeft:265,
textDecorationLine:"underline",
fontWeight:"bold",
color:"black"
  },
  footerText:{
    paddingBottom:10,
    marginTop : 10,
    fontWeight:"bold",
    color:"black",
    textAlign : 'center',
  }
}
)