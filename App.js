import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfScreen from './src/screens/ProfScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateTestScreen from './src/screens/CreateTestScreen';
import UploadNewTestScreen from './src/screens/UploadNewTestScreen';

const Stack = createStackNavigator();

function HomeScreenn() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Prof" component={ProfScreen} />
        <Stack.Screen name="CreateTest" component={CreateTestScreen} />
        <Stack.Screen name="UploadNewTestScreen" component={UploadNewTestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
