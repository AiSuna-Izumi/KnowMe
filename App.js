
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './screen/LoginPage';
import StartUpPage from './screen/StartUpPage';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './screen/SignUpPage';
import HomePage from './screen/HomePage';
import Caunselor from './screen/Caunselor';
import Anxiety from './screen/Meditation/Anxiety';
import Depression from './screen/Meditation/Depression';
import MentalHealth from './screen/Meditation/MentalHealth';
import Stress from './screen/Meditation/Stress';
import Meditation1 from './screen/MeditationReal/Meditation1';
import Meditation2 from './screen/MeditationReal/Meditation2';
import Meditation3 from './screen/MeditationReal/Meditation3';
import Meditation4 from './screen/MeditationReal/Meditation4';
import Meditation5 from './screen/MeditationReal/Meditation5';
import Meditation6 from './screen/MeditationReal/Meditation6';
import Meditation7 from './screen/MeditationReal/Meditation7';
import Dass from './screen/Dass/Dass';
import Dass1 from './screen/Dass/Dass1';
import Dass2 from './screen/Dass/Dass2';
import Final from './screen/Dass/Final';



//  function App() {
//   return (
//     <Final/> 
//     );
// }


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartUp" component={StartUpPage} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="caunselor" component={Caunselor} options={{ headerShown: false }}/>
        <Stack.Screen name="anxiety" component={Anxiety} options={{ headerShown: false }}/>
        <Stack.Screen name="depress" component={Depression} options={{ headerShown: false }}/>
        <Stack.Screen name="mentalHealth" component={MentalHealth} options={{ headerShown: false }}/>
        <Stack.Screen name="stress" component={Stress} options={{ headerShown: false }}/>
        <Stack.Screen name="Medi1" component={Meditation1} options={{ headerShown: false }}/>
        <Stack.Screen name="Medi2" component={Meditation2} options={{ headerShown: false }}/>
        <Stack.Screen name="Medi3" component={Meditation3} options={{ headerShown: false }}/>
        <Stack.Screen name="Medi4" component={Meditation4} options={{ headerShown: false }}/>
        <Stack.Screen name="Medi5" component={Meditation5} options={{ headerShown: false }}/>
        <Stack.Screen name="Medi6" component={Meditation6} options={{ headerShown: false }}/>
        <Stack.Screen name="Medi7" component={Meditation7} options={{ headerShown: false }}/>
        <Stack.Screen name="Dass" component={Dass} options={{ headerShown: false }}/>
        <Stack.Screen name="Dass1" component={Dass1} options={{ headerShown: false }}/>
        <Stack.Screen name="Dass2" component={Dass2} options={{ headerShown: false }}/>
        <Stack.Screen name="Final" component={Final} options={{ headerShown: false }}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

