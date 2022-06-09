import React from 'react';
import  {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'

// Screens
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import MenuScreen from '../screens/MenuScreen';
import CatalogoScreen from '../screens/CatalogoScreen';
import ArticuloScreen from '../screens/ArticuloScreen';

const Stack = createNativeStackNavigator();

export default function MainStack(){
  return (
      <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
              name='Splash'
              component={ LoadingScreen }
              options={{
              headerShown: false
              }}
            />
            <Stack.Screen
              name='Login'
              component={ LoginScreen }
              options={{
              headerShown: false
              }}
            />
            <Stack.Screen
              name='Menu'
              component={ MenuScreen }
              options={{
              headerShown: false
              }}
            />  
            <Stack.Screen
              name='Catalogo'
              component={ CatalogoScreen }
              options={{
              headerShown: false
              }}
            /> 
            <Stack.Screen
              name='ProductDetails'
              component={ ArticuloScreen }
              options={{
              headerShown: false
              }}
            />   
          </Stack.Navigator>
      </NavigationContainer>
  );
}

