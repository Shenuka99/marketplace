import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Product } from '@/constants/Interfaces'

export default function SingleProduct({item, index} : { item: Product, index: number}) {
  return (
    <TouchableOpacity className='flex-1 m-1 p-2 rounded-lg border-[1px] border-slate-200'>
    <Image source={{ uri: item.image }} className='w-full h-[140px]' />
    <View>
   
    <Text className='text-[15px] font-bold mt-2'>{item.title}</Text>
    <Text className='text-[20px] font-bold text-blue-500'>$ {item.price}</Text>
    <Text className='text-blue-500 bg-blue-200 p-1 rounded-lg px-2 text-[10px] mt-2 self-start w-auto'>{item.category}</Text>
    </View>
  </TouchableOpacity>
  )
}