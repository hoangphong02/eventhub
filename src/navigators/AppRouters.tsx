import React, { useEffect, useState } from 'react'
import { SplashScreen } from '../screens';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { IApplicationState } from '../redux/storeConfig/store';
import { getProfile } from '../redux/auth/actions';

const AppRouters = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  const dispatch: Dispatch = useDispatch()
  const { auth, isLoading } = useSelector(
    (state: IApplicationState) => state.authReducer,
  );
  useEffect(() => {

    dispatch(getProfile());
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [auth]);
  console.log('auth', auth)


  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : auth.ac ? (
        <MainNavigator />
      ) : (
        <AuthNavigator />
      )}
    </>
  )
}

export default AppRouters

