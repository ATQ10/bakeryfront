import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const productService = require('../services/productService');

function checkValidUrl (url) {
  var types = ['jpg','jpeg','tiff','png','gif','bmp'];
  let defaultImg = 'https://cutewallpaper.org/24/no-image-png/757119977.jpg';
  if (!(url === null) && url != undefined) {
    var parts = url.split('.');
    var extension = parts[parts.length-1];
    return (types.indexOf(extension) !== -1) ? url : defaultImg;
  }else{
    return defaultImg;
  }
  
}

export default function EditarArtScreen({route}) {

  const navigation = useNavigation();

  var pId = "";

  if (route.params.idProduct) {
    const { idProduct } = route.params;
    pId = idProduct
  }

  function createProduct(titulo, url, desc, precio, ingredientes, origen){
    const p = {
      "Name": titulo, 
      "Img": url,
      "Description": desc,
      "Price": precio,
      "Ingredients": ingredientes,
      "Origin": origen,
    };
    productService.create(p);
    console.log("enviado");
  }

  const [product, setProduct] = useState({});
  
    useEffect(() => {
      getProduct()
    }, [])
  
    const getProduct = async() => {
      // Obtener datos con la API y pasarlos a setProduct por ID
      const prod = await productService.getByID(pId);
      setProduct(
          prod
      )
    }  
    
  
  var [txtURL, onChangeText0] = React.useState(null);
  var [txtTitulo, onChangeText1] = React.useState(null);
  var [txDescripcion, onChangeText2] = React.useState(null);
  var [txtPrecio, onChangeText3] = React.useState(null);
  var [txtIngredientes, onChangeText4] = React.useState(null);
  var [txtOrigen, onChangeText5] = React.useState(null);  
  
  const goBack = () => {
    navigation.goBack()
  }

    // createProduct(p);
    
  /*
  txtTitulo = product.Name;
  txtURL = product.Img;
  txDescripcion = product.Description;
  txtPrecio = "$"+product.Price;
  txtIngredientes = product.Ingredients;
  txtOrigen = product.Origin;
  */

    return (
      <View style={ArticuloStyle.container}>
        <View style={ArticuloStyle.header}>
          <TouchableOpacity onPress={goBack}>
            <Text style={ArticuloStyle.title2}>&lt;</Text>
          </TouchableOpacity>
        </View>
        <View style={ArticuloStyle.image}>
          <Image
          style={ArticuloStyle.imageStyle}
          source={{
            uri: txtURL!="" ? checkValidUrl(txtURL):'https://cutewallpaper.org/24/no-image-png/757119977.jpg',
          }}
          />
      
        </View>
        <View style={ArticuloStyle.info}>
          <View style={{flex: 1,flexDirection: 'row',alignItems: 'center'}}>
            <TextInput
              style={EditarArtStyles.inputTitle}
              onChangeText={onChangeText1}
              value={txtTitulo}
              placeholder="Nombre"
              keyboardType="default"
            />
            <TextInput
              style={EditarArtStyles.inputURL}
              onChangeText={onChangeText0}
              value={txtURL}
              placeholder="URL de la imagen"
              keyboardType="default"
            />
          
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>Descripcion:</Text>
            <TextInput
              style={EditarArtStyles.input}
              onChangeText={onChangeText2}
              value={txDescripcion}
              placeholder="Dona de chocolate..."
              keyboardType="default"
            />
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Precio:
            </Text>
            <TextInput
              style={EditarArtStyles.input}
              onChangeText={onChangeText3}
              value={txtPrecio}
              placeholder="19"
              keyboardType="numeric"
            />
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Ingredientes:
            </Text>
            <TextInput
              style={EditarArtStyles.input}
              onChangeText={onChangeText4}
              value={txtIngredientes}
              placeholder="Harina, huevo..."
              keyboardType="default"
            />
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Lugar de origen:
            </Text>
            <TextInput
              style={EditarArtStyles.input}
              onChangeText={onChangeText5}
              value={txtOrigen}
              placeholder="Traida de..."
              keyboardType="default"
            />
          </View>
        <View style={ArticuloStyle.buttons}>
          <TouchableOpacity style={ArticuloStyle.touchableStyle}
            //onPress={createProduct( txtTitulo, txtURL, txDescripcion, txtPrecio, txtIngredientes, txtOrigen)}
            onPress={() => {createProduct( txtTitulo, txtURL, txDescripcion, txtPrecio, txtIngredientes, txtOrigen)}}>
            <Text style={ArticuloStyle.touchableText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ArticuloStyle.touchableStyle}>
            <Text style={ArticuloStyle.touchableText}>Salir</Text>
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
  },
  title2: {
    color: "#fff",
    fontSize: 25,
    fontWeight: 'bold',
  },
  header: {
    flex: 2,
    backgroundColor: '#7D4F50',
    justifyContent: 'center',
    paddingHorizontal: 25
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


const EditarArtStyles = StyleSheet.create({
  input: {
    flex: 2,
    height: 35,
    margin: 12,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  inputTitle: {
    flex: 1,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  inputURL: {
    flex: 2,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
});


