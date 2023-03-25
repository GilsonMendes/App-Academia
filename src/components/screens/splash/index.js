
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {

  return (
    <View style={styles.container}>

      <ImageBackground
        style = {styles.imgArea}
        source={require('../../../../assets/splash.png')}
      >

        <View style={styles.areaPeso}>
          <LottieView
            style={{ height: 200, with: 200, }}
            source={require('../../../../assets/json/5792-dumble-icon-fitness-health.json')}
            autoPlay
          />
          
        </View>
      </ImageBackground>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaPeso: {
   
   display: 'flex',
   flex: 1,
   width: 415,
   alignItems: 'center',
   justifyContent: 'center', 
   
  },
  
})
