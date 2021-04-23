import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ReminderScreen from './screens/ReminderScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
export default function App(){
  
    return (
     <AppContainer/>
    );
  }

  const switchNavigator = createSwitchNavigator({
    WelcomeScreen : {screen : WelcomeScreen},
    ReminderScreen : {screen : ReminderScreen}
  })

const AppContainer = createAppContainer(switchNavigator)