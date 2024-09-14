import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="itemList" options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#3b82f6',
                },
                headerTintColor: '#fff'
            }} />
            <Stack.Screen name="productDetails" options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#3b82f6',
                },
                headerTintColor: '#fff',
                title: 'Product Details'
            }} />
        </Stack>
    );
}
