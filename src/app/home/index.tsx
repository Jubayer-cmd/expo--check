import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import TreadingPage from '@/components/treading';
import PopularPage from '@/components/popular';
import Bottomlist from '@/components/bottomlist';
const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView className='flex-1 mt-3'>
        <View className='flex flex-row justify-between items-center'>
          <View className='flex flex-row items-center'>
            <Image
              source={require('./../../assets/Ellipse 1.png')}
              className='rounded-full h-14 w-14 object-fill'
            />
            <Text className='text-white text-2xl pl-4'>Hello, John!</Text>
          </View>
          <View className='flex flex-row'>
            <Ionicons
              name='wallet-outline'
              size={24}
              color='white'
              className='mx-2 bg-[#313131] p-3 rounded-full'
            />
            <Ionicons
              name='notifications-outline'
              className='mx-2 bg-[#313131] p-3 rounded-full'
              size={24}
              color='white'
            />
          </View>
        </View>

        <View>
          <ImageBackground
            source={require('./../../assets/1975 1.png')}
            className='w-full h-48 mt-5 '
            style={styles.image}
          >
            <View className='w-56 p-3'>
              <Text className='text-white text-2xl font-bold mb-4'>
                Limited Edition NFTs available
              </Text>
              <LinearGradient
                colors={['#923DE6', '#FB4E4E']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className='p-2 mt-2 w-36'
                style={{ borderRadius: 20 }}
              >
                <Text className='text-white text-center text-sm font-bold'>
                  Explore Music
                </Text>
              </LinearGradient>
            </View>
          </ImageBackground>
        </View>
        <TreadingPage />
        <PopularPage />
        <Bottomlist />
      </SafeAreaView>
      <StatusBar style='light' />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  image: {
    resizeMode: 'stretch',
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default HomePage;
