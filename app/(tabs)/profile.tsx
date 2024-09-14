import { client } from "@/config/kindeClientConfig";
import { UserProfile } from "@/constants/Interfaces";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import credit from '@/assets/images/debit-card.png';
import purchases from '@/assets/images/shopping-cart.png';
import explore from '@/assets/images/exploration.png';
import logout from '@/assets/images/logout.png';
import { useRouter } from "expo-router";
import { handleLogout } from "@/config/kindeClientConfig";

export default function Profile() {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const router = useRouter();

  const getUserData = async () => {
    try {
      const userProfile = await client.getUserDetails();
      setUserData(userProfile);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const menuList = [
    { id: 1, name: 'My Credit', icon: credit, path: '/credit' },
    { id: 2, name: 'Explore', icon: explore, path: '/(tabs)/explore' },
    { id: 3, name: 'My Purchases', icon: purchases, path: '/purchase' },
    { id: 4, name: 'Logout', icon: logout },
  ];

  const handleOnPress = (item: any) => {
    if (item.path) {
      router.navigate(item.path);
    } else {
      handleLogout();
    }
  };

  return (
    <SafeAreaView className='flex-1 p-5 bg-white'>
      <View>
        {userData?.picture && (
          <Image source={{ uri: userData.picture }} className='rounded-full w-[100px] h-[100px] self-center' />
        )}
        <Text className="font-bold text-[25px] mt-2 self-center">
          {userData?.given_name} {userData?.family_name}
        </Text>
        <Text className="text-[18px] mt-2 text-gray-500 self-center">{userData?.email}</Text>
      </View>

      <FlatList
        data={menuList}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleOnPress(item)} className="flex-auto p-3 border-[1px] items-center justify-center mx-2 mt-4 rounded-lg border-blue-400 bg-blue-50">
            <Image source={item.icon} className="w-[50px] h-[50px]" />
            <Text className="text-[12px] mt-2 text-blue-700">{item.name}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}
