import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Category } from '@/constants/Interfaces';




const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter()

  const getCategoryList = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories');
      const data: Category[] = await response.json();
      setCategories(data);
    //   console.log(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const onPress = (item : Category) =>  {
    router.push('/itemList')
    router.setParams({category: item.name})
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  const renderItem = ({ item, index }: { item: Category, index: number }) => {
    if (index > 6) return null;

    return (
      <TouchableOpacity 
      onPress={() => onPress(item)}
      className='flex-1 items-center justify-center p-2 border-[1px] border-blue-300 m-1 h-[80px] rounded-lg bg-blue-50'>
        <Image source={{ uri: item.image }} className='w-[40px] h-[40px]' />
        <Text className='text-[12px] mt-1'>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className='mt-3'>
      <Text className='font-bold text-[20px] mb-2'>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        numColumns={4}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};



export default Categories;
