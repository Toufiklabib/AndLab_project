import { StyleSheet,  View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Pages/Welcome/Welcome';
import SignIn from './Pages/Sign_In/SignIn';
import SignUp from './Pages/Sign_Up/SignUp';
import Home from './Pages/Home/Home';

const Router = () => {
 
    const Stack = createNativeStackNavigator() ;

    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='welcome Page'  >
        <Stack.Screen name='Welcome Page' component={Welcome} options={{headerShown:false}} ></Stack.Screen>
        <Stack.Screen name='signup' component={SignUp} options={{headerShown:false}} ></Stack.Screen>
        <Stack.Screen name='login' component={SignIn} options={{headerShown:false}} ></Stack.Screen>
        <Stack.Screen name='home' component={Home} options={{headerShown:false}} ></Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
      );
};

export default Router;

const styles = StyleSheet.create({})