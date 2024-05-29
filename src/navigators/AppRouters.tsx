import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SplashScreen } from '../screens';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import VoucherNavigator from './VoucherNavigator';

const AppRouters = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <MainNavigator />
      )}
    </>
  )
}

export default AppRouters

