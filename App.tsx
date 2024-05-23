/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/redux/storeConfig/store';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './src/utils/history';
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
        {/* <ConnectedRouter history={history}> */}
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
        {/* </ConnectedRouter> */}

      </Provider>
    </>
  )
};

export default App;
