/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { InputComponent } from '../../components';
import { globalStyles } from '../../styles/globalStyles';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    return (
        <View style={[globalStyles.container, {justifyContent: 'center', alignItems: 'center'}]}>
            <InputComponent placeholder='Email' value={email} onChange={(val)=> setEmail(val)} />
        </View>
    );
};

export default LoginScreen;
