import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';   

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'orange',
            tabBarLabelStyle: {
                marginBottom: 5
            },
            // tabBarStyle: {
            //     backgroundColor: '#f4fs55'
            // }
        }}>
            <Tabs.Screen
                name='home'
                options={{
                    // tabBarLabel: ({color}) => (
                    //     <Text className={`mb-1 text-[10px] text-[${color}]`}>Home</Text>
                    // ),
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="home" size={size} color={color} />
                    ),
                }} />
            <Tabs.Screen
                name='explore'
                options={{ 
                //     tabBarLabel: ({color}) => (
                //     <Text className={`mb-1 text-[10px] text-${color}-400`}>Explore</Text>
                // ),
                tabBarLabel: 'Explore',

                tabBarIcon: ({color, size}) => (
                    <AntDesign name="search1" size={size} color={color} />
                ) }} />
            <Tabs.Screen
                name='profile'
                options={{ 
                //     tabBarLabel: ({color}) => (
                //     <Text className={`mb-1 text-[10px] text-${color}-400`}>Profile</Text>
                // ),
                tabBarLabel:'Profile',
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="profile" size={size} color={color} />
                )}} />

        </Tabs>
    )
}