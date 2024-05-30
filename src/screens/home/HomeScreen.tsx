import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';
import { Dispatch } from 'redux';
import { IApplicationState } from '../../redux/storeConfig/store';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/product/actions';
import React, { useEffect } from 'react';
import { ContainerComponent, TextComponent } from '../../components';
const HomeScreen = () => {
    const dispatch: Dispatch = useDispatch();
    const { products, isLoading } = useSelector(
        (state: IApplicationState) => state.productReducer,
    );
    useEffect(() => {
        dispatch(getProducts(6));
    }, []);
    return (
        <View>
            <FlatList
                style={{ paddingHorizontal: 16 }}
                showsHorizontalScrollIndicator={false}
                data={products}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <TextComponent styles={{ fontSize: 14 }} text={item.name} />
                    </View>
                )
                }
                contentContainerStyle={{ gap: 10 }}
            />
        </View>

    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        justifyContent: "space-between",
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
    },
})