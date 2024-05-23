/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { StatusBar } from 'react-native';
import {Provider} from 'react-redux'
import {store} from './src/redux/storeConfig/store';
const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
    <Provider store={store}>
      <StatusBar barStyle="dark-content"
        backgroundColor="transparent"
        translucent />
      {isShowSplash ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <AuthNavigator />
          </NavigationContainer>
        )
      }
    </Provider>
    </>
  )
};

export default App;
