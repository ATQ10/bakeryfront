import React from 'react';
import  {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import LoginScreen from '../screens/LoginScreen';
import   MenuScreen   from '../screens/MenuScreen';

const Stack = createNativeStackNavigator();

export default function MainStack(){
  return (
      <NavigationContainer>
          <Stack.Navigator>
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
              
          </Stack.Navigator>
      </NavigationContainer>
  );
}

