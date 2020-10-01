import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from '../Location/Location'
import HistoryContainer from '../History/HistoryContainer';

const Tab = createBottomTabNavigator();
export const Routes = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#224E61',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 20,
        },
        style:{
          paddingBottom:10
        }
      }}
    >
      <Tab.Screen name='Location' component={Location}/>
      <Tab.Screen name='History' component={HistoryContainer}/>
    </Tab.Navigator>
  </NavigationContainer>
);
