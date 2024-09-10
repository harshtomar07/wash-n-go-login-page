import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Image
          source={require('../assets/bgImage.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.bottomContainer}>
      <Text style={styles.title}>Welcome Ramesh</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Logout')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 400,
    resizeMode: 'cover',
    marginTop: 250,

  },
  topHalf: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',


  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    

  },
  bottomContainer:{
    flex : 1,

  },
  title: {
    fontSize: 24,
 marginTop:300,

  },
});
