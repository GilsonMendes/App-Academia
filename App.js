import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import Splash from './src/components/screens/splash';

export default function App() {
  return (
    <View style={styles.container}>
      <Splash />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex: 1,


  }
})