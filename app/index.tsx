import { router, useRouter } from "expo-router";
import { View, Text, Image, Button, ImageBackground, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x';


export default function App() {

const KINDE_ISSUER_URL='https://shenuka.kinde.com'
const KINDE_POST_CALLBACK_URL='exp://192.168.72.211:8081'
const KINDE_POST_LOGOUT_REDIRECT_URL='exp://192.168.72.211:8081'
const KINDE_CLIENT_ID='f1a1a415f3b349ba9befeeb7b71dc63b'

  const YOUR_KINDE_ISSUER  = KINDE_ISSUER_URL 
  const YOUR_KINDE_REDIRECT_URI = KINDE_POST_CALLBACK_URL
  const YOUR_KINDE_CLIENT_ID = KINDE_CLIENT_ID
  const YOUR_KINDE_LOGOUT_REDIRECT_URI = KINDE_POST_LOGOUT_REDIRECT_URL 

  const router = useRouter();
  const client = new KindeSDK(YOUR_KINDE_ISSUER, YOUR_KINDE_REDIRECT_URI, YOUR_KINDE_CLIENT_ID, YOUR_KINDE_LOGOUT_REDIRECT_URI);


  const handleSignUp = async () => {
    const token = await client.register();
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

  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      // User was logged out
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
        <TouchableOpacity  onPress={handleSignIn} className="p-4 bg-blue-500 rounded-full mt-20">
          <Text className="text-white text-center text-[18px]">Get Started</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="dark" />
      {/* </SafeAreaView> */}
    </View>
  );
}


