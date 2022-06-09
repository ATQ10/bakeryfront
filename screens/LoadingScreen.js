import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'

import cargando from '../assets/load.gif'
import pan from '../assets/panadero.jpg'

const LoadingScreen =()=>{
    return (
      <View style={LoadingStyle.fondo}>
                 <Image source={pan} style={LoadingStyle.panadero}></Image>
                 <Text style={LoadingStyle.texto}>C a r g a n d o . . .</Text>
                 <Image source={cargando} style={LoadingStyle.cargar}></Image>
      </View>
    );
}

const LoadingStyle = StyleSheet.create({

    texto: {
        color: '#7D4F50', 
        fontSize: 14,
        marginTop: '4%'
    },

panadero: {
    width: 200, 
    height: 265, 
    marginTop: '55%'
},

cargar: {
    marginTop: '5%',
    width: 50, 
    height: 50, 
    alignSelf: 'center',
    paddingHorizontal: 50, 
    paddingVertical: 50,
        
}, 
fondo: {
    flex: 1, 
    backgroundColor: 'white', 
    alignItems: 'center', 
    alignContent: 'center'
}
  
});

export default LoadingScreen;