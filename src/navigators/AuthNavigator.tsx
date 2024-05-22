/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, OnboardingScreen, RegisterScreen } from '../screens';

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='OnboardScreen' component={OnboardingScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />

        </Stack.Navigator>
    );
};

export default AuthNavigator;
