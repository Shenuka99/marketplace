import { Category } from "@/constants/Interfaces";
import { Stack, } from "expo-router";


export default function RootLayout(){


    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
            <Stack.Screen name="index"  options={{ headerShown: false}}/>
            <Stack.Screen name="itemList"  options={{headerShown: true, title: 'title'}} />
        </Stack>
    )
}