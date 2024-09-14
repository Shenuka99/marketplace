import { View, Text, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Product } from '@/constants/Interfaces';
import SingleProduct from '@/components/SingleProduct';

export default function ItemList() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    navigation.setOptions({ headerShown: true, title: params.category });
    // console.log(params);
  }, [navigation]);

  const getItemListByCategory = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${params.category}`);
      const itemList: Product[] = await response.json();
      setData(itemList);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);  // Stop the loading spinner once the data is fetched
    }
  };

  useEffect(() => {
    getItemListByCategory();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center h-full">
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <ScrollView>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item, index }: { item: Product; index: number }) => {
            return <SingleProduct item={item} index={index} />;
          }}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
        />
      ) : (
        <Text className="text-center p-5 text-2xl text-gray-400">No items found</Text>
      )}
    </ScrollView>
  );
}
