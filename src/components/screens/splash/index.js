
import { Text, StyleSheet, View, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Svg, Path } from 'react-native-svg';


export default function App() {

  return (
    <View style={styles.container}>


      <ImageBackground
        style={styles.imgArea}
        source={require('../../../../assets/splash.jpg')}
      >
        <LinearGradient
          colors={['rgb(235, 94, 40)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}


        >
          <View style={styles.areaPeso}>

            <Svg
              width={99}
              height={99}
              viewBox='0 0 99 99'
              fill="none"
              stroke="#fff"
              fillRule={"evenodd"}
              strokeLinecap="round"
              strokeLinejoin='round'  
            >
              <Path
                d="M27.72 17.82a3.958 3.958 0 0 0-3.96 3.96v55.44a3.958 3.958 0 0 0 3.96 3.96h3.96a3.958 3.958 0 0 0 3.96-3.96V55.44h27.72v21.78a3.958 3.958 0 0 0 3.96 3.96h3.96a3.958 3.958 0 0 0 3.96-3.96V21.78a3.958 3.958 0 0 0-3.96-3.96h-3.96a3.958 3.958 0 0 0-3.96 3.96v21.78H35.64V21.78a3.958 3.958 0 0 0-3.96-3.96h-3.96Zm-13.86 7.92A3.958 3.958 0 0 0 9.9 29.7v39.6a3.958 3.958 0 0 0 3.96 3.96h5.94V25.74h-5.94Zm65.34 0v47.52h5.94a3.958 3.958 0 0 0 3.96-3.96V29.7a3.958 3.958 0 0 0-3.96-3.96H79.2ZM1.98 43.56c-1.09 0-1.98.89-1.98 1.98v7.92c0 1.09.89 1.98 1.98 1.98h3.96V43.56H1.98Zm91.08 0v11.88h3.96c1.09 0 1.98-.89 1.98-1.98v-7.92c0-1.09-.89-1.98-1.98-1.98h-3.96Z"
                fill="#fff"
              />
            </Svg>
            

          </View>
        </LinearGradient>
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
