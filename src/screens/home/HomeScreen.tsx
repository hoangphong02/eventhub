import { View, Text } from 'react-native';
import { Dispatch } from 'redux';
import { IApplicationState } from '../../redux/storeConfig/store';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/product/actions';
import React, { useEffect } from 'react';
const HomeScreen = () => {
    const dispatch: Dispatch = useDispatch();
    const { products, isLoading } = useSelector(
        (state: IApplicationState) => state.productReducer,
    );
    useEffect(() => {

        dispatch(getProducts(6));
    }, []);
    console.log('products', products)
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;
