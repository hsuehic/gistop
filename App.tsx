import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BlueText } from './src/component/BlueText';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world.</Text>
      <BlueText />
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
