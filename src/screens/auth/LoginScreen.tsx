/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { ButtonComponent } from '../../components';
import { globalStyles } from '../../styles/globalStyles';

const LoginScreen = () => {
    return (
        <View >
            <Text>LoginScreen</Text>
            <ButtonComponent type='link' text='LOGIN' icon={<View><Text>N</Text></View>}/>
        </View>
    );
};

export default LoginScreen;
