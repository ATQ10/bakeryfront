import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';

function checkValidUrl (url) {
  var types = ['jpg','jpeg','tiff','png','gif','bmp'];
  let defaultImg = 'https://cutewallpaper.org/24/no-image-png/757119977.jpg';
  if (!(url === null)) {
    var parts = url.split('.');
    var extension = parts[parts.length-1];
    return (types.indexOf(extension) !== -1) ? url : defaultImg;
  }else{
    return defaultImg;
  }
  
}

const EditarArtScreen =()=>{
  const [txtURL, onChangeText0] = React.useState(null);
  const [txtTitulo, onChangeText1] = React.useState(null);
  const [txDescripcion, onChangeText2] = React.useState(null);
  const [txtPrecio, onChangeText3] = React.useState(null);
  const [txtIngredientes, onChangeText4] = React.useState(null);
  const [txtOrigen, onChangeText5] = React.useState(null);

    return (
      <View style={ArticuloStyle.container}>
        <View style={ArticuloStyle.header}></View>
        <View style={ArticuloStyle.image}>
          <Image
          style={ArticuloStyle.imageStyle}
          source={{
            uri: checkValidUrl(txtURL),
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
          <TouchableOpacity style={ArticuloStyle.touchableStyle}>
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


const EditarArtStyles = StyleSheet.create({
  input: {
    flex: 2,
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
export default EditarArtScreen;