/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/redux/storeConfig/store';
import AppRouters from './src/navigators/AppRouters';
const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <ConnectedRouter history={history}> */}
        <StatusBar barStyle="dark-content"
          backgroundColor="transparent"
          translucent />
        <NavigationContainer>
          <AppRouters />
        </NavigationContainer>
        {/* </ConnectedRouter> */}

      </Provider>
    </>
  )
};

export default App;
