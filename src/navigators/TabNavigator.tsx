/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactNode } from 'react';
import VoucherNavigator from './VoucherNavigator';
import ProfileNavigator from './ProfileNavigator';
import EventNavigator from './EventNavigator';
import { AddNewScreen, HomeScreen } from '../screens';
import { appColors } from '../constants/appColors';
import { Home2 } from 'iconsax-react-native';
import { TextComponent } from '../components';
import { Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TabNavigator = () => {
    const Tabs = createBottomTabNavigator();
    return (
        <Tabs.Navigator
            screenOptions = {({route}) =>({
                    headerShown: false,
                    tabBarStyle: {
                        height: Platform.OS === 'ios' ? 88 : 68,
                        justifyContent: 'center',
                        alignItems:'center',
                    },
                    tabBarIcon: ({focused, color, size})=>{
                        let icon: ReactNode;
                        color = focused ? appColors.primary : appColors.gray;
                        size= 20;
                        switch (route.name) {
                            case 'Trang chủ':
                                icon = focused? <MaterialIcons name='home-filled' size={size} color={color}/> :<Feather name="home" size={size} color={color}/>
                                break
                            case 'Đổi thưởng':
                                icon =  <Feather name="shopping-bag" size={size} color={color}/>
                                break
                            case 'Đặt nhanh':
                                icon = <Feather name="shopping-cart" size={size} color={color}/>
                                break
                            case 'Cửa hàng':
                                icon = <MaterialCommunityIcons name="storefront-outline" size={size} color={color}/>
                                break    
                            case 'Tài khoản':
                                icon = <MaterialCommunityIcons name= {focused ? "account" : "account-outline"} size={size} color={color}/>
                                break 
                        }
                        return icon
                    },
                    tabBarIconStyle: {
                        marginBottom: Platform.OS === 'android' ? -8 : 0,
                        marginTop: 8
                    },
                    tabBarLabel({focused}){
                        return (
                            <TextComponent text={route.name} color={focused ? appColors.primary : appColors.gray} styles={{marginBottom: 12, fontSize: 10, fontWeight: 'bold'}} />
                        )
                    }
                 })} >
            <Tabs.Screen name="Trang chủ" component={HomeScreen} />
            <Tabs.Screen name="Đổi thưởng" component={VoucherNavigator} />
            <Tabs.Screen name ="Đặt nhanh" component={AddNewScreen}/>
            <Tabs.Screen name="Cửa hàng" component={EventNavigator} />
            <Tabs.Screen name="Tài khoản" component={ProfileNavigator} />
        </Tabs.Navigator>
    );
};

export default TabNavigator;
