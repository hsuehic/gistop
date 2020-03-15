import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlueText } from './src/component/BlueText';
import { GreenText } from './src/component/GreenText';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world.</Text>
      <BlueText />
      <GreenText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
