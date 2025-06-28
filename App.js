import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/HomeScreen';
import ClientScreen from './app/screens/ClientScreen';
import GroupScreen from './app/screens/GroupScreen';
import PersonalScreen from './app/screens/PersonalScreen';
import ExercisesScreen from './app/screens/ExercisesScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Clients" component={ClientScreen} />
        <Stack.Screen name="Groups" component={GroupScreen} />
        <Stack.Screen name="Personal" component={PersonalScreen} />
        <Stack.Screen name="Exercises" component={ExercisesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

