import React from 'react';
import { StyleSheet, View,StatusBar } from 'react-native';
import { Routes } from './src/components/Routes/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar backgroundColor='#224E61'/>
        <Routes/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
