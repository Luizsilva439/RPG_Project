import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { CustomText, Logo } from '../../components';


export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo/>
      <CustomText>Welcome to RPG</CustomText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
