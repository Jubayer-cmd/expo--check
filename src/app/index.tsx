import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const GetStartPage = () => {
  return (
    <ImageBackground
      source={require('./../assets/fictional.png')}
      className='flex-1 object-cover'
    >
      <SafeAreaView>
        <View className='flex justify-between'>
          <Text className=' basis-1/2 text-center text-white text-xl font-bold'>
            HitMakr
          </Text>
          <View className='basis-1/2 justify-end pb-15'>
            <Text className='text-white text-4xl font-bold text-center'>
              Sounds That
            </Text>
            <Text className='text-white text-4xl font-bold text-center'>
              Make You Move
            </Text>
            <Text className='text-white text-center bg'></Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {}}
              className='mt-5 mx-auto'
            >
              <Link href={'/home'} style={styles.title}>
                Get Started
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust the opacity as needed
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)', // Adjust the opacity and color as needed
    width: 350,
    marginBottom: 100,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GetStartPage;
