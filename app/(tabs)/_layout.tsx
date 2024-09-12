import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';   

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black'
        }}>
            <Tabs.Screen
                name='home'
                options={{
                    tabBarLabel: ((color) => (
                        <Text className={`mb-1 font-xs text-[${color}]`}>Home</Text>
                    )),
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="home" size={size} color={color} />
                    )
                }} />
            <Tabs.Screen
                name='explore'
                options={{ tabBarLabel: ((color) => (
                    <Text className={`mb-1 font-xs text-[${color}]`}>Explore</Text>
                )),
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="search1" size={size} color={color} />
                ) }} />
            <Tabs.Screen
                name='profile'
                options={{ tabBarLabel: ((color) => (
                    <Text className={`mb-1 font-xs text-[${color}]`}>Profile</Text>
                )),
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="profile" size={size} color={color} />
                )}} />

        </Tabs>
    )
}