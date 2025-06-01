import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SplashScreen } from './src/screen/SplashScreen';
import { useFonts, SourceSansPro_400Regular, SourceSansPro_700Bold, SourceSansPro_600SemiBold, SourceSansPro_900Black } from '@expo-google-fonts/source-sans-pro';
import AppLoading from 'expo-app-loading';



export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return <SplashScreen/>
}
