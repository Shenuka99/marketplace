import Categories from "@/components/Home/Categories";
import Header from "@/components/Home/Header";
import LatestItemList from "@/components/Home/LatestItemList";
import { StatusBar } from "expo-status-bar";
import {  Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Home() {
  return (
    <SafeAreaView className='flex flex-1 bg-white'>
        <View className="p-4">
            <Header/>
            <Categories/>
            <LatestItemList/>
        </View>    
        <StatusBar style="dark"/>
     </SafeAreaView>
  );
}


