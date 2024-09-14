import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetails() {
  const params = useLocalSearchParams();
  const { id, title, description, price, category, image } = params;

  const availableCredit = 100; 
  const canBuy = availableCredit >= +(price);

  return (
    <View className='flex-1'>
      <ScrollView className='bg-white mb-2'>
        <Image source={{ uri: image.toString() }} className="w-full h-[320px]" />
        <View className='p-3 pt-2'>
          <Text className="text-2xl font-semibold mt-2 text-red-500 border-[1px] rounded-lg border-red-500 p-1 max-w-max self-start">${price}</Text>
          <Text className="text-[20px] font-bold">{title}</Text>
          <Text className="text-blue-500 bg-blue-200 p-1 rounded-lg px-2 text-[12px] mt-2 self-start w-auto">{category}</Text>
          <Text className="text-[16px] mt-2 font-bold">Description</Text>
          <Text className="text-lg text-gray-500">{description}</Text>
        </View>
      </ScrollView>

      <View className='bg-white p-3'>
        <Text className="text-lg font-bold text-gray-700 mb-2">Available Credit: ${availableCredit}</Text>
        <Pressable
          disabled={!canBuy}
          className={`z-40 left-0 right-0 w-full rounded-full py-2 mt-3 ${canBuy ? 'bg-yellow-500' : 'bg-gray-300'}`}
        >
          <Text className='text-center text-lg text-white font-bold'>{canBuy ? 'Buy Now' : 'Insufficient Credit'}</Text>
        </Pressable>
      </View>
    </View>
  );
}
