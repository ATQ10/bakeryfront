import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ArticuloScreen from './screens/ArticuloScreen';
import CatalogoScreen from './screens/CatalogoScreen';
import EditarArtScreen from './screens/EditarArtScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import MainStack from './navigation/MainStack';

export default function App() {
  return (
     <MainStack/>
    // <ArticuloScreen></ArticuloScreen>
   // <CatalogoScreen></CatalogoScreen>
    //<MenuScreen></MenuScreen>
    // <EditarArtScreen></EditarArtScreen>
  //  <LoginScreen></LoginScreen>
    //<LoginScreen></LoginScreen>
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