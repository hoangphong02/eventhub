import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { InputComponent, SectionComponent, ContainerComponent, ButtonComponent, TextComponent } from '../../components';
import { globalStyles } from '../../styles/globalStyles';
import { Edit, Key } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/actions';

const LoginScreen = ({ navigation }: any) => {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const dispatch: Dispatch = useDispatch()

    useEffect(() => {
        if (!phone || !password) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }

    }, [phone, password])

    const handleLogin = () => {
        const payload = {
            phone, password
        }
        console.log('payload', payload)
        dispatch(login(payload))
    }

    return (
        <>
            <ContainerComponent isImageBackground isScroll>
                <SectionComponent
                    styles={{
                        justifyContent: 'center',
                        top: 20
                    }}>
                    <Image
                        source={require('../../assets/images/thuocsi.png')}
                        style={{
                            resizeMode: 'contain',
                            height: 50,
                            // marginBottom: 30,
                        }}
                    />
                    <SectionComponent styles={{ flexDirection: 'row', paddingHorizontal: 0, paddingBottom: 10, paddingTop: 10 }}>
                        <TextComponent text='Chào mừng đến với ' />
                        <TextComponent text='thuocsi' styles={{ color: appColors.primary }} />
                    </SectionComponent>
                    <TextComponent text='Đăng nhập để nhận nhiều ưu đãi hấp dẫn' styles={{
                        fontSize: 13, color: appColors.gray,
                        paddingBottom: 20
                    }} />
                </SectionComponent>
                <SectionComponent styles={[globalStyles.container, styles.container]}>
                    <InputComponent placeholder='Nhập số điện thoại hoặc email' type='email-address' value={phone} onChange={(val) => setPhone(val)} allowClear affix={<Edit size={20} color={appColors.text} />} />
                    <InputComponent placeholder='Nhập mật khẩu' value={password} onChange={(val) => setPassword(val)} isPassword affix={<Key size={20} color={appColors.text} />} />
                </SectionComponent>
                <SectionComponent styles={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }} >
                    <ButtonComponent text='Quên mật khẩu?' type='link' disabled={isDisabled} styles={{ flex: 1, flexDirection: 'row', alignSelf: 'flex-end' }} />
                </SectionComponent>
                <SectionComponent >
                    <ButtonComponent text='Đăng nhập' type='primary' disabled={isDisabled} onPress={handleLogin} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, paddingTop: 20 }}>
                        <Text>Phiên bản 2.0.57</Text>
                    </View>
                </SectionComponent>
            </ContainerComponent>
            <SectionComponent styles={[styles.register, styles.btnSignUp]}>
                <TextComponent text='Để nhận ưu đãi hấp dẫn,' />
                <ButtonComponent text='Đăng ký ngay' type='link' onPress={() => navigation.navigate('RegisterScreen')} />
            </SectionComponent>
        </>
    );
};


export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 20,
    },
    register: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        gap: 2
    },
    btnSignUp: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1
    }
})