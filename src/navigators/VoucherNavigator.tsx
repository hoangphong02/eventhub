import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, VoucherScreen } from '../screens';

const VoucherNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="VoucherScreen" component={VoucherScreen} />
        </Stack.Navigator>
    );
}

export default VoucherNavigator