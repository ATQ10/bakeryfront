import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'

const ArticuloScreen =()=>{
    return (
      <View style={ArticuloStyle.container}>
        <View style={ArticuloStyle.header}></View>
        <View style={ArticuloStyle.image}>
          <Image
          style={ArticuloStyle.imageStyle}
          source={{
            uri: 'https://s3-dunkin-pro.s3.amazonaws.com/media/catalog/category/donuts-icon.png',
          }}
          />
        </View>
        <View style={ArticuloStyle.info}>
          <Text style={ArticuloStyle.titleInfo}>Dona</Text>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Descripcion:
            </Text>
            <Text style={ArticuloStyle.textRowInfo}>
              Dona de chocolate rellena de cajeta con chispas.
            </Text>
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Precio:
            </Text>
            <Text style={ArticuloStyle.textRowInfo}>
              $19
            </Text>
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Ingredientes:
            </Text>
            <Text style={ArticuloStyle.textRowInfo}>
              Harina, huevo, azucar, chocolate y cajeta.
            </Text>
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Lugar de origen:
            </Text>
            <Text style={ArticuloStyle.textRowInfo}>
              Traida de San Luis Potosi.
            </Text>
          </View>
        <View style={ArticuloStyle.buttons}>
          <TouchableOpacity style={ArticuloStyle.touchableStyle}>
            <Text style={ArticuloStyle.touchableText}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ArticuloStyle.touchableStyle}>
            <Text style={ArticuloStyle.touchableText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
}

const ArticuloStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'gray',
    //marginTop: Constants.statusBarHeight,
    //paddingVertical: 10,
    

  },
  header: {
    flex: 2,
    backgroundColor: '#7D4F50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 6,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 35,
  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingHorizontal: 35,
  },
  rowInfo: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
  },
  titleInfo: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingVertical: 10,
  },
  titleRowInfo: {
    flex: 1,
    flexDirection: 'row',
    //backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
  },
  textRowInfo: {
    flex: 2,
    flexDirection: 'row',
    //backgroundColor: 'red',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  touchableStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    elevation: 8,
    backgroundColor: "#7D4F50",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 10,
    //paddingHorizontal: 35,
  },
  touchableText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    //textTransform: "uppercase"
  }
});

export default ArticuloScreen;