import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
export default function PopularPage() {
  const data = [
    {
      id: '1',
      artist: 'Tyler',
      artistImage:
        'https://townsquare.media/site/812/files/2023/04/attachment-Tyler.jpg',
    },
    {
      id: '2',
      artist: 'Queen',
      artistImage: 'https://i.ytimg.com/vi/vsl3gBVO2k4/maxresdefault.jpg',
    },
    {
      id: '3',
      artist: 'Ed Sheeran',
      artistImage:
        'https://hips.hearstapps.com/hmg-prod/images/ed-sheeran-GettyImages-494227430_1600.jpg?crop=1xw:1.0xh;center,top&resize=1200:*',
    },
    {
      id: '4',
      artist: 'Led Zeppelin',
      artistImage:
        'https://pyxis.nymag.com/v1/imgs/8df/76f/894b2ea1e613afe7d97a17e3f4ab756b9d-29-led-zep.1x.rsquare.w1400.jpg',
    },
    {
      id: '5',
      artist: 'Nirvana',
      artistImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDKMyO7puGruB7BWFanMYkyqs8aPQIE0KBikbKe4SWg&s',
    },
  ];

  const renderItem = ({ item }) => (
    <View className='mx-3 w-40 p-3 h-60 rounded-lg'>
      <Image
        source={{ uri: item.artistImage }}
        className='rounded-full h-20 w-20'
      />
      <Text className='text-white text-md font-semibold text-center mt-2'>
        {item.artist}
      </Text>
    </View>
  );
  return (
    <View>
      <View className='flex flex-row justify-between mt-4 items-center'>
        <Text className='text-white text-2xl font-bold '>Popular Artists</Text>
        <Entypo
          name='chevron-right'
          className='pr-2 bg-[]'
          size={24}
          color='white'
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
}
