import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import DictionaryScreen from './screens/DictionaryScreen';
import QuizScreen from './screens/QuizScreen';
import LessonScreen from './screens/LessonScreen';
import Lesson1 from './Lesson/Lesson1';
import Lesson2 from './Lesson/Lesson2';
import Lesson3 from './Lesson/Lesson3';
import Lesson4 from './Lesson/Lesson4';
import Lesson5 from './Lesson/Lesson5';
import Lesson6 from './Lesson/Lesson6';
import Lesson7 from './Lesson/Lesson7';
import Lesson8 from './Lesson/Lesson8';
import Lesson9 from './Lesson/Lesson9';




const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tudien" component={DictionaryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson" component={LessonScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson1" component={Lesson1} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson2" component={Lesson2} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson3" component={Lesson3} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson4" component={Lesson4} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson5" component={Lesson5} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson6" component={Lesson6} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson7" component={Lesson7} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson8" component={Lesson8} options={{ headerShown: false }} />
        <Stack.Screen name="Lesson9" component={Lesson9} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default StackNavigator

const styles = StyleSheet.create({})