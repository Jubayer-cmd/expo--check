import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
export default function TreadingPage() {
  const data = [
    {
      id: '1',
      song: 'Where This Flower Blooms',
      artist: 'Tyler',
      artistImage:
        'https://townsquare.media/site/812/files/2023/04/attachment-Tyler.jpg',
      image:
        'https://media.newyorker.com/photos/597a187cc100c36587d577bf/16:9/w_1280,c_limit/Listening-Booth-Tyler-the-Creator-Where-This-Flower-Blooms.jpg',
    },
    {
      id: '2',
      song: 'Bohemian Rhapsody',
      artist: 'Queen',
      image:
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5FB50F6487805F0EB5EB37C721777CFCE7FBD12AA623A737701E38924838CED0/scale?width=1200&aspectRatio=1.78&format=webp',
      artistImage: 'https://i.ytimg.com/vi/vsl3gBVO2k4/maxresdefault.jpg',
    },
    {
      id: '3',
      song: 'Shape of You',
      artist: 'Ed Sheeran',
      image: 'https://i.ytimg.com/vi/l6BkLiEXjOE/maxresdefault.jpg',
      artistImage:
        'https://hips.hearstapps.com/hmg-prod/images/ed-sheeran-GettyImages-494227430_1600.jpg?crop=1xw:1.0xh;center,top&resize=1200:*',
    },
    {
      id: '4',
      song: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      image: 'https://i.scdn.co/image/ab67616d0000b2735da38bbf542705917f33a4d9',
      artistImage:
        'https://pyxis.nymag.com/v1/imgs/8df/76f/894b2ea1e613afe7d97a17e3f4ab756b9d-29-led-zep.1x.rsquare.w1400.jpg',
    },
    {
      id: '5',
      song: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      image:
        'https://thehardtimes.net/wp-content/uploads/2018/08/nirvanafinal.jpg',
      artistImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDKMyO7puGruB7BWFanMYkyqs8aPQIE0KBikbKe4SWg&s',
    },
  ];

  const renderItem = ({ item }) => (
    <View className='bg-[#181717] mx-3 w-72 p-3 h-60 rounded-lg'>
      <Image source={{ uri: item.image }} className='w-64 h-36 rounded-lg' />
      <View className='flex flex-row items-center mt-4'>
        <Image
          source={{ uri: item.artistImage }}
          className='rounded-full h-12 w-12 object-fill'
        />
        <View className='pl-3'>
          <Text className='text-white text-sm font-bold mb-1'>{item.song}</Text>
          <Text className='text-white text-xs font-normal'>{item.artist}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View>
      <View className='flex flex-row justify-between my-6 items-center'>
        <Text className='text-white text-2xl font-bold '>
          Trending on Chain
        </Text>
        <Entypo name='chevron-right' className='pr-2' size={24} color='white' />
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
