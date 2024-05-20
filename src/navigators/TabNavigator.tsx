/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeScreen } from '../screens';

const TabNavigator = () => {
    const Tabs = createBottomTabNavigator();
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen name="HomeScreen" component={HomeScreen} />
        </Tabs.Navigator>
    );
};

export default TabNavigator;
