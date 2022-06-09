import React , {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ImageBackground, TextInput} from 'react-native';

import fondo from '../assets/fondocool.jpg'
import molino from '../assets/molino.png'

const LoginScreen =()=>{
//VARIABLES PARA LOS INPUT 
  const [usuario, setUsuario] = useState('admin');
  const[contraseña, setContraseña]= useState('12345');

    return (       
      <ImageBackground source={fondo} blurRadius={4} style={LoginStyle.back}>
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
                      
                              <TouchableOpacity>
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
   paddingVertical: 50, 
 },
  
 contenido: {
   flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },

 rectangulo: {
   flex:1,
   backgroundColor: 'white',
   borderRadius: 20, 
   width: '90%',
   alignContent: 'center', 
   paddingVertical: 30, 
   paddingHorizontal: 40
 }, 
 
  logo: { //molino
     alignSelf: 'center', 
    width: 100, 
    height: 100, 
    marginTop: 30,
    borderRadius: 50
 },

 titulo: {
   marginTop: 9,
   fontSize: 40, 
   fontWeight: 'bold',
   color: '#7D4F50', 
   fontFamily: 'sans-serif',
   textAlign: 'center'
  }, 

  texto: {
    marginTop: 20,
    fontFamily: 'sans-serif', 
    fontSize: 20, 
    color: '#72715C'
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
    width: 190,
    margin: 10,
    borderWidth: 1,
    padding: 7,
  }
});

export default LoginScreen;
