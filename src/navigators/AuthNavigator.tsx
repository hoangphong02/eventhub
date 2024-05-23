/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, OnboardingScreen, RegisterScreen } from '../screens';
import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeft } from 'iconsax-react-native';

const AuthNavigator = ({ navigation }: any) => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='OnboardScreen' component={OnboardingScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown: true, title : ''
            }} />

        </Stack.Navigator>
    );
};

export default AuthNavigator;
