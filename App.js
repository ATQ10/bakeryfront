import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ArticuloScreen from './screens/ArticuloScreen';

export default function App() {
  return (
    <ArticuloScreen></ArticuloScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
{/*
    <View style={styles.container}>
      
       <Text>
        Open up App.js to start working on your app!
      </Text> 
      <StatusBar style="auto" />
      
    </View>*/}