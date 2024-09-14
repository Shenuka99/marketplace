import Categories from "@/components/Home/Categories";
import Header from "@/components/Home/Header";
import LatestItemList from "@/components/Home/LatestItemList";
import { StatusBar } from "expo-status-bar";
import {  ScrollView, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Home() {
  return (
    <SafeAreaView className='flex flex-1 bg-white'>
        <ScrollView className="p-4">
            <Header/>
            <Categories/>
            <LatestItemList/>
        </ScrollView>    
        <StatusBar style="dark"/>
     </SafeAreaView>
  );
}


