import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet , Image,TouchableOpacity} from 'react-native';
import axios from 'axios';

export default function SignUpScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = async () => {
    
      const response = await axios.post('https://tor.appdevelopers.mobi/api/register', {
        phone,
        password,
        name
      });
      if (response.data.success) {
        navigation.navigate('SignIn');
      } else {
        alert('Sign Up Failed');
      }
   
  };

  return (
    <View style={styles.container}>
       <View style={styles.topHalf}>
      <Image 
    source={require('../assets/bgImage.png')} 
    style={styles.image}
  />
  </View>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={{fontWeight:"bold",color:"black"}}  >Name</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
       <Text style={{fontWeight:"bold",color:"black"}}  >Phone</Text>
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
        <Text style={{fontWeight:"bold",color:"black"}}  >Password</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <View style={styles.button}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Welcome')}> 
        <Text style={styles.buttonText}>SignIn</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.linkText} onPress={() => navigation.navigate('SignIn')}>Already have an account? Sign In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',   
    height: 200,   
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
    padding: 16,
    backgroundColor:"#fff"
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    flexWrap:"wrap"
  },
  linkText: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
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
});
