import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ArticuloScreen from './screens/ArticuloScreen';
import CatalogoScreen from './screens/CatalogoScreen';
import EditarArtScreen from './screens/EditarArtScreen';
import MenuScreen from './screens/MenuScreen';

export default function App() {
  return (
    //<ArticuloScreen></ArticuloScreen>
    <CatalogoScreen></CatalogoScreen>
    //<MenuScreen></MenuScreen>
    //<EditarArtScreen></EditarArtScreen>
  );
}

const styles = StyleSheet.create({

});
{/*
    <View style={styles.container}>
      
       <Text>
        Open up App.js to start working on your app!
      </Text> 
      <StatusBar style="auto" />
      
    </View>*/}