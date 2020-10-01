import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  weatherConditions  from '../../../utils/weatherConditions';

const Weather = ({ temperature, weather }) => {
  return(
    <View style={{
      flex: 1,
      backgroundColor: weatherConditions[weather].color
    }}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name={weatherConditions[weather].icon} color={'#fff'}/>
        <Text style={styles.tempText}>{temperature}˚</Text>
        <Text style={styles.title}>{weather}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  tempText: {
    fontSize: 30,
    color: '#fff'
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
});

export default Weather;
