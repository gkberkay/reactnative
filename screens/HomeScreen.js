import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NativeModules } from 'react-native';

// const { nativewind } = NativeModules;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text className={styles.red}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default HomeScreen;
