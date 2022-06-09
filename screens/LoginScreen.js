import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ImageBackground, TextInput} from 'react-native';

import fondo from '../assets/fondocool.jpg'
import molino from '../assets/molino.png'

import {login} from '../services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';


const LoginScreen =({})=>{
  const navigation = useNavigation();
//VARIABLES PARA LOS INPUT 
  const [usuario, setUsuario] = useState('admin');
  const[contraseña, setContraseña]= useState('12345');

  async function makeLogin (){
    if(usuario=='' || contraseña==''){
      alert("Completa el formulario")
    }else{
      const response = await login(usuario, contraseña);
      if(response!=undefined){
        if(response.accessToken!=undefined){
          try {
            const a = await AsyncStorage.setItem('auth_token', JSON.stringify(response.accessToken))
            
            //redireccionar a otra pagina
            navigation.navigate('Menu')
          } catch (e) {
            console.log(e)
          }
        }else{
          alert(response.message)
        }
        

      }else{
        //mostrar mensaje de error
        alert('Error en el login')

      }
    }
    
  }

    return (       
      <ImageBackground source={fondo} blurRadius={6} style={LoginStyle.back}>
          <View style={LoginStyle.contenido}>
                 <Image source={molino} style={LoginStyle.logo}></Image>
                      <View  style={LoginStyle.rectangulo}>
                            <Text style={LoginStyle.titulo}>LOGIN</Text>
                              <Text style={LoginStyle.texto}>Usuario:</Text>
                                  {/*USUARIO*/}
                                  <TextInput
                                          style={LoginStyle.ingresarTexto}
                                          placeholder="Introduce tu usuario"
                                          onChangeText={(val)=> setUsuario(val)}
                                         />

                               <Text style={LoginStyle.texto}>Contraseña:</Text>
                                      {/*CONTRASEÑA */}
                                     <TextInput
                                          style={LoginStyle.ingresarTexto}
                                          placeholder="Introduce tu contraseña"
                                          onChangeText={(val)=> setContraseña(val)}
                                          secureTextEntry={true}/>
                      
                              <TouchableOpacity onPress={makeLogin}>
                                    <View style={LoginStyle.boton}>
                                    <Text style={LoginStyle.txtbtn}>Ingresar</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                <Text style={LoginStyle.link}>Olvidé mi contraseña</Text>
                                </TouchableOpacity>
             </View> 
          </View>
      </ImageBackground>
   );
}

const LoginStyle = StyleSheet.create({
  
   //mi codigo perron

   back: {
   flex: 1, 
   paddingHorizontal: 30, 
   paddingBottom: 100,
  },
  
 contenido: {
   flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },

 rectangulo: {
   flex: 1,
   backgroundColor: 'white',
   borderRadius: 50, 
   width: '90%',
   maxHeight: 500,
   alignContent: 'center', 
   paddingVertical: 30, 
   paddingHorizontal: 50,
   justifyContent: 'center',
   alignItems: 'center'
 }, 
 
  logo: { //molino
    position: 'relative',
    top:'5%',
    zIndex:120,
    width: 120, 
    height: 120, 
    marginTop: 30,
    borderRadius: 100
 },

 titulo: {
   marginTop: 9,
   fontSize: 40, 
   fontWeight: 'bold',
   color: '#7D4F50', 
   textAlign: 'center'
  }, 

  texto: {
    width: '100%',
    marginTop: 20,
    fontSize: 20, 
    color: '#72715C',
    textAlign: 'left'
  },

  link: {
    marginTop: 20,
    textAlign:'center',
    fontSize: 15, 
    color: 'brown', 
    fontStyle: 'italic', 
   }, 

  boton: {
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: "#7D4F50", 
    borderRadius: 50, 
    width: 150, 
    height: 50
  }, 

  txtbtn: {
    margin: 10,
    textAlign: 'center', 
    fontSize: 20, 
   color: 'white'
  }, 

  ingresarTexto: {
    height: 40,
    width: '100%',
    margin: 0,
    borderBottomWidth: 1,
    padding: 7,
  }
});

export default LoginScreen;
