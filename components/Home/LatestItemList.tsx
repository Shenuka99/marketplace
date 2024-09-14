import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Product } from '@/constants/Interfaces';
import SingleProduct from '../SingleProduct';



export default function LatestItemList() {
  const [products, setProducts] = useState<Product[]>([]);

  const getLatestItems = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data: Product[] = await response.json();
      setProducts(data);
      // console.log(data[0]);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getLatestItems();
  }, []);


  return (
    <View className='mt-3 mb-4'>
      <Text className='font-bold text-[20px] mb-2'>Latest Items</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item, index }: { item: Product; index: number }) => {
          if (index > 6) return null;
          return (
            <SingleProduct item={item} index={index} />
          );
        }}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      />
    </View>
  );
}
