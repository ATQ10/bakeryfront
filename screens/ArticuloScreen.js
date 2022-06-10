import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const productService = require('../services/productService');

export default function ArticuloScreen({route}) {
  const navigation = useNavigation();

  const [product, setProduct] = useState({});
  const { idProduct } = route.params;
  
  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async() => {
    // Obtener datos con la API y pasarlos a setProduct
    const prod = await productService.getByID(idProduct);

    setProduct(prod)
  }  

  const goBack = () => {
    navigation.goBack()
  }

  const openEditProduct = (id) => {
    console.log(id)
    navigation.navigate('EditProduct',{idProduct: id})
  }

  const deleteProduct = async(id) => {
    await productService.remove(id);
    alert('Producto Eliminado!')
    navigation.goBack();
  }

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
            uri: product.Img,
          }}
          />
        </View>
        <View style={ArticuloStyle.info}>
          <Text style={ArticuloStyle.titleInfo}>{product.Name}</Text>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Descripcion:
            </Text>
            <Text style={ArticuloStyle.textRowInfo}>
            {product.Description}
            </Text>
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Precio:
            </Text>
            <Text style={ArticuloStyle.textRowInfo}>
              ${product.Price}
            </Text>
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Ingredientes:
            </Text>
            <Text style={ArticuloStyle.textRowInfo}>
            {product.Ingredients}
            </Text>
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Lugar de origen:
            </Text>
            <Text style={ArticuloStyle.textRowInfo}>
            {product.Origin}
            </Text>
          </View>
        <View style={ArticuloStyle.buttons}>
          <TouchableOpacity style={ArticuloStyle.touchableStyle} onPress={() => {openEditProduct(product._id)}}>
            <Text style={ArticuloStyle.touchableText}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ArticuloStyle.touchableStyle} onPress={() => {deleteProduct(product._id)}}>
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

