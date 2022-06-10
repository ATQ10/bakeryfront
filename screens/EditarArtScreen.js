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


  // Checar si llega un parametro con el id
  try{
    if (route.params.idProduct != undefined) {
      if( route.params != undefined){
        const { idProduct } = route.params;
        pId = idProduct
      }
    }
  }catch{
    pId = "-1"
  }

  const createProduct = async() => {
    const p = {
      "Name": name, 
      "Img": url,
      "Description": desc,
      "Price": Number(price),
      "Ingredients": ing,
      "Origin": origin,
    };

    if (pId == '-1') {
      await productService.create(p);
      console.log("producto creado");
      navigation.goBack()
    }
    else {
      await productService.update(pId,p);
      console.log("producto actualizado")
      navigation.goBack()
    }
  }

  // producto
  const [product, setProduct] = useState({});

  // var [txtURL, onChangeText0] = React.useState("");
  // var [txtTitulo, onChangeText1] = React.useState("");
  // var [txDescripcion, onChangeText2] = React.useState("");
  // var [txtPrecio, onChangeText3] = React.useState("");
  // var [txtIngredientes, onChangeText4] = React.useState("");
  // var [txtOrigen, onChangeText5] = React.useState("");  
  
  const [name, setName] = useState("")
  const [url, setURL] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [ing, setIng] = useState("")
  const [origin, setOrigin] = useState("")


    useEffect(() => {
      getProduct()
    }, [])
  
    var i = 0;
    const getProduct = async() => {
      // Obtener datos con la API y pasarlos a setProduct por ID
      if(i==0) {
        var prod = {}
        console.log(pId)
        if(pId != '-1') {
          prod = await productService.getByID(pId);
        }
        else {
          prod = {
            Name: "",
            Img: "https://cutewallpaper.org/24/no-image-png/757119977.jpg",
            Description: "",
            Price: 0,
            Ingredients: "",
            Origin: ""
          }
        }        
        console.log(prod)
        setProduct(prod)
        setName(product.Name)
        setURL(product.Img)
        setDesc(product.Description)
        setPrice(JSON.stringify(product.Price))
        setIng(product.Ingredients)
        setOrigin(product.Origin)
        i++
      }
    }  
    
  const goBack = () => {
    navigation.goBack()
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
            uri: product.Img !="" ? checkValidUrl(product.Img):'https://cutewallpaper.org/24/no-image-png/757119977.jpg',
          }}
          />
      
        </View>
        <View style={ArticuloStyle.info}>
          <View style={{flex: 1,flexDirection: 'row',alignItems: 'center'}}>
            <TextInput
              style={EditarArtStyles.inputTitle}
              onChangeText={(val) => setName(val)}
              defaultValue={product.Name}
              placeholder="Nombre"
              keyboardType="default"
              editable={true}
            />
            <TextInput
              style={EditarArtStyles.inputURL}
              onChangeText={(val) => setURL(val)}
              defaultValue={product.Img}
              placeholder="URL de la imagen"
              keyboardType="default"
              editable={true}
            />
          
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>Descripcion:</Text>
            <TextInput
              style={EditarArtStyles.input}
              onChangeText={(val) => setDesc(val)}
              defaultValue={product.Description}
              placeholder="Dona de chocolate..."
              keyboardType="default"
              editable={true}
            />
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Precio:
            </Text>
            <TextInput
              style={EditarArtStyles.input}
              onChangeText={(val) => setPrice(val)}
              defaultValue={JSON.stringify(product.Price)}
              placeholder="19"
              keyboardType="numeric"
              editable={true}
            />
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Ingredientes:
            </Text>
            <TextInput
              style={EditarArtStyles.input}
              onChangeText={(val) => setIng(val)}
              defaultValue={product.Ingredients}
              placeholder="Harina, huevo..."
              keyboardType="default"
              editable={true}
            />
          </View>
          <View style={ArticuloStyle.rowInfo}>
            <Text style={ArticuloStyle.titleRowInfo}>
              Lugar de origen:
            </Text>
            <TextInput
              style={EditarArtStyles.input}
              onChangeText={(val) => setOrigin(val)}
              defaultValue={product.Origin}
              placeholder="Traida de..."
              keyboardType="default"
              editable={true}
            />
          </View>
        <View style={ArticuloStyle.buttons}>
          <TouchableOpacity style={ArticuloStyle.touchableStyle} onPress={createProduct}>
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


