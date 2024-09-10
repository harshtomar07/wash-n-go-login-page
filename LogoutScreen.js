import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LogoutScreen({ navigation }) {
  const handleLogout = () => {
    // Clear session or token here if needed
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You have been logged out.</Text>
      <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
