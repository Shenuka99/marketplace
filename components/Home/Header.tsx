import { View, Text, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x'
import Ionicons from '@expo/vector-icons/Ionicons'; 

export default function Header() {

  interface UserProfile {
    email: string;
    family_name: string;
    given_name: string;
    id: string;
    picture: string;
  }
  

  const KINDE_ISSUER_URL='https://shenuka.kinde.com'
const KINDE_POST_CALLBACK_URL='exp://192.168.72.211:8081'
const KINDE_POST_LOGOUT_REDIRECT_URL='exp://192.168.72.211:8081'
const KINDE_CLIENT_ID='f1a1a415f3b349ba9befeeb7b71dc63b'

  const YOUR_KINDE_ISSUER  = KINDE_ISSUER_URL 
  const YOUR_KINDE_REDIRECT_URI = KINDE_POST_CALLBACK_URL
  const YOUR_KINDE_CLIENT_ID = KINDE_CLIENT_ID
  const YOUR_KINDE_LOGOUT_REDIRECT_URI = KINDE_POST_LOGOUT_REDIRECT_URL 

  const client = new KindeSDK(YOUR_KINDE_ISSUER, YOUR_KINDE_REDIRECT_URI, YOUR_KINDE_CLIENT_ID, YOUR_KINDE_LOGOUT_REDIRECT_URI);

  const [userData, setUserData] = useState<UserProfile | null>(null);

  const getUserData = async () => {

    try {
      const userProfile = await client.getUserDetails();
      setUserData(userProfile)
      console.log(userProfile);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  
  }

  useEffect(() => {
    getUserData()
  }, [])
  



  return (

    <View>
      {/* user info */}
    <View className='flex flex-row gap-4 items-center'>
      <Image source={{ uri: userData?.picture}} className='rounded-full w-10 h-10'/>
      <View>
        <Text className='text-[16px]'>Welcome</Text>
        <Text className='text-[20px]'>{userData?.given_name} {userData?.family_name}</Text>
        
      </View>
    </View>

    {/* Search Bar */}
      <View className='flex flex-row items-center p-[9px] px-5 mt-5 bg-blue-50 rounded-full border-blue-300 border-[1px]'>
      <Ionicons name="search" size={24} color={'gray'} />
        <TextInput
         placeholder='Search'
         className='ml-2 text-[18px]'
         onChangeText={(value) => console.log(value)}
         />
      </View>
    </View>
  )
}