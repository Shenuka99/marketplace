import { View, Text, TouchableOpacity, Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'

interface Category {
    id: number;
    name: string;
    image: string;
  }
  
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
  }

export default function LatestItemList() {
   
    const [products, setProducts] = useState<Product[]>([]);
   

    const getLatestItems = async () => {
        try {
          const response = await fetch('https://api.escuelajs.co/api/v1/products');
          const data: Product[] = await response.json();
          setProducts(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };

      useEffect(() => {
      getLatestItems()
      }, [])
      


      const renderItem = ({ item, index }: { item: Product, index: number }) => {
        // if (index > 6) return null;
    
        return (
          <TouchableOpacity className='flex-1 items-center justify-center p-2 border-[1px] border-blue-300 m-1 h-[80px] rounded-lg bg-blue-50'>
            <Image source={{ uri: item.images[0] }} className='w-[40px] h-[40px]' />
            <Text className='text-[12px] mt-1'>{item.title}</Text>
          </TouchableOpacity>
        );
      };
    
      return (
        <View className='mt-3'>
          <Text className='font-bold text-[20px] mb-2'>Latest Items</Text>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            numColumns={4}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
}