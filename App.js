import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

//Screens
import Home from './screens/home'
import Recents from './screens/recents'
import Profile from './screens/profile'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      swipeEnabled
      initialRoute="Home"
      activeColor="#02ad94"
      inactiveColor="#dedede"
      style={{ backgroundColor: '#000'}}
      barStyle={{ backgroundColor: '#0f0f0f', padding: 4}}
      >
          <Tab.Screen 
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
          }}
           />
          <Tab.Screen
          name="Recents"
          component={Recents}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="camera-metering-spot" color={color} size={28} />
            ),
          }}
           />
          <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={28} />
            ),
          }}
           />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;