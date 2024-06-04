import React, { useEffect, useState } from 'react'
import { SplashScreen } from '../screens';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IApplicationState } from '../redux/storeConfig/store';
import { getProfile } from '../redux/user/actions';

const AppRouters = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  // const [accessToken, setAccessToken] = useState('');

  const dispatch: Dispatch = useDispatch()
  const { user, isLoading } = useSelector(
    (state: IApplicationState) => state.userReducer,
  );
  const { auth } = useSelector(
    (state: IApplicationState) => state.authReducer,
  );
  // const { getItem, setItem } = useAsyncStorage('ACCESS_TOKEN')


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);


  useEffect(() => {
    dispatch(getProfile());
  }, [auth]);
  console.log('user', user)
  console.log('auth', auth)
  // useEffect(() => {
  //   checkLogin()
  // }, [])

  // const checkLogin = async () => {
  //   const token = await getItem()

  //   token && setAccessToken(token)
  // }
  // console.log(accessToken)

  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : user?.id ? (
        <MainNavigator />
      ) : (
        <AuthNavigator />
      )}
    </>
  )
}

export default AppRouters

