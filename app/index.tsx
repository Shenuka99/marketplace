import { router, useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {client} from '../config/kindeClientConfig'
import { handleLogout } from "../config/kindeClientConfig";



export default function App() {
  const router = useRouter();

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      console.log('Authenticated')
      router.push('/home')
    } else {
      console.log('not Authenticated')
      handleSignIn()
    }
  };
  
  useEffect(() => {
    checkAuthenticate();
  }, []);

  const handleSignUp = async () => {
    const token = await client.register();

    console.log(token)

    if (token) {
      // User was authenticated
    }
  };

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      // User was authenticated
      router.push('/home')
    } 
  };


  return (
    <View className='flex flex-1 items-center'>
      {/* <SafeAreaView className='flex flex-1 items-center'> */}
      <Image
        source={require('../assets/images/ecommerce.jpg')}
        className='w-full h-1/2'
      />
      <View className="p-8 pt-15 bg-white mt-[-20px] rounded-t-3xl shadow-md flex flex-1">
        <Text className="text-[29px] font-bold">Community Marketplace</Text>
        <Text className="text-[18px] text-slate-500 mt-6">Buy Sell Marketplace where you can sell old item and make real money</Text>
        <TouchableOpacity  onPress={checkAuthenticate} className="p-4 bg-blue-500 rounded-full mt-20">
          <Text className="text-white text-center text-[18px]">Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={handleLogout} className="p-4 bg-red-500 rounded-full mt-10">
          <Text className="text-white text-center text-[18px]">Logout</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="dark" />
      {/* </SafeAreaView> */}
    </View>
  );
}


