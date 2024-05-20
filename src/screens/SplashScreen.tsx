/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { appInfo } from '../constants/appInfos';
import { SpaceComponent } from '../components';
import { appColors } from '../constants/appColors';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logo-with-text.png')}
                alt=""
                style={styles.image}
            />
            <SpaceComponent height={16} />
            <ActivityIndicator color={appColors.gray} size={22} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: appInfo.sizes.WIDTH * 0.8,
        resizeMode: 'contain',
    },
});

export default SplashScreen;
