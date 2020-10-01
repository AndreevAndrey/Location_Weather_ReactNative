import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ErrorMessage = ({ error }) => (
  <View>
    <Text style={styles.errorMessage}>Weather: {error}</Text>
  </View>
);

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 20,
    color: '#ff234a'
  }
});

export default ErrorMessage;
