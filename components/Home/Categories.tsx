import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image,  Pressable } from 'react-native';
import { Category } from '@/constants/Interfaces';




const Categories: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const router = useRouter()

  const getCategoryList = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
      // console.log(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const onPress = (item : string) =>  {
    router.navigate('/itemList')
    router.setParams({category: item})
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  const renderItem = ({ item, index }: { item: string, index: number }) => {
    if (index > 6) return null;

    return (
      <Pressable 
      onPress={() => onPress(item)}
      className='flex-1 items-center justify-center p-2 border-[1px] border-blue-300 m-1 h-[80px] rounded-lg bg-blue-50'>
        {/* <Image source={{ uri: item.image }} className='w-[40px] h-[40px]' /> */}
        <Text className='text-[12px] mt-1'>{item}</Text>
      </Pressable>
    );
  };

  return (
    <View className='mt-3'>
      <Text className='font-bold text-[20px] mb-2'>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        numColumns={4}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};



export default Categories;
