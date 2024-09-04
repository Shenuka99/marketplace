import { View, Text, Image, Button, StatusBar, ImageBackground, TouchableOpacity } from "react-native";
import ecommerce from '@/assets/images/ecommerce.jpg'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function TabOneScreen() {
  return (
    <ClerkProvider publishableKey="pk_test_cmVsYXRlZC1yZWluZGVlci04Ny5jbGVyay5hY2NvdW50cy5kZXYk">

      <SignedOut>
        <View className='flex flex-1 items-center'>
          <StatusBar barStyle="dark-content" />
          <Image
            source={ecommerce}
            className='w-full h-1/2 object-cover'
          ></Image>
          <View className="p-8 bg-white mt-[-20px] rounded-t-3xl shadow-md">
            <Text className="text-[29px] font-bold">Community Marketplace</Text>
            <Text className="text-[18px] text-slate-500 mt-6">Buy Sell Marketplace where you can sell old item and make real money</Text>
            <TouchableOpacity onPress={() => console.log("Sign In")} className="p-4 bg-blue-500 rounded-full mt-20">
              <Text className="text-white text-center text-[18px]">Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

    </ClerkProvider>
  );
}


