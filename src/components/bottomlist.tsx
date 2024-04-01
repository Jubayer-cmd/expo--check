import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default function Bottomlist() {
  return (
    <View>
      <View
        style={styles.container}
        className='flex flex-row justify-between my-3'
      >
        <View className='flex flex-row items-center'>
          <Image
            source={require('./../assets/Ellipse 9.png')}
            className='rounded-full h-10 w-10 object-fill'
          />
          <View className='pl-3'>
            <Text className='text-white text-sm font-bold mb-1'>
              Where This Flower Blooms
            </Text>
            <Text className='text-white text-xs font-normal'>Tyler</Text>
          </View>
        </View>
        <AntDesign
          name='caretright'
          size={20}
          className='mx-2 bg-[#ffffff] p-3 rounded-full text-[#1B1B1B]'
          color={'#1B1B1B'}
        />
      </View>
      {/* <View style={styles.navbar}>
        <Feather name='home' size={24} color='black' />
        <Text style={styles.text}>Popular</Text>
        <Text style={styles.text}>New</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(66, 2, 130, 0.5)', // Adjust RGB values and alpha as needed
    padding: 8,
    borderRadius: 10,
  },
  navbar: {
    backgroundColor: 'rgba(66, 2, 130, 0.5)', // Adjust RGB values and alpha as needed
    padding: 8,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  text: {
    color: 'white',
  },
});
