import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { InputComponent, SectionComponent, ContainerComponent, ButtonComponent, TextComponent } from '../../components';
import { globalStyles } from '../../styles/globalStyles';
import { PasswordCheck, Sms } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';
import { Validate } from '../../utils/validate';


const RegisterScreen = ({ navigation }: any) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        const emailValidateion = Validate.email(email)
        const phoneValidateion = Validate.Phone(phone)
        if (!name || !phone || !email || !password || !confirmPassword || !emailValidateion || !phoneValidateion) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }

    }, [email, password, name, phone, confirmPassword])

    return (
        <ContainerComponent isImageBackground isScroll>
            <SectionComponent
                styles={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 75,
                }}>
                <Image
                    source={require('../../assets/images/logo-with-text.png')}
                    style={{
                        resizeMode: 'contain',
                        height: 50,
                        marginBottom: 30,
                    }}
                />
            </SectionComponent>
            <SectionComponent styles={[globalStyles.container, styles.container]}>
                <InputComponent placeholder='Name' value={name} onChange={(val) => setName(val)} allowClear affix={<Sms size={22} color={appColors.gray} />} />
                <InputComponent placeholder='Email' type='email-address' value={email} onChange={(val) => setEmail(val)} allowClear affix={<Sms size={22} color={appColors.gray} />} />
                <InputComponent placeholder='Phone' value={phone} onChange={(val) => setPhone(val)} allowClear affix={<Sms size={22} color={appColors.gray} />} />
                <InputComponent placeholder='Password' value={password} onChange={(val) => setPassword(val)} isPassword affix={<PasswordCheck size={22} color={appColors.gray} />} />
                <InputComponent placeholder='ConfirmPassword' value={confirmPassword} onChange={(val) => setConfirmPassword(val)} isPassword affix={<PasswordCheck size={22} color={appColors.gray} />} />

            </SectionComponent>
            <SectionComponent >
                <ButtonComponent text='SIGN UP' type='primary' disabled={isDisabled} />
            </SectionComponent>
            <SectionComponent styles={styles.register}>
                <TextComponent text='Bạn đã có tài khoản?' />
                <ButtonComponent text='Đăng nhập' type='link' onPress={() => navigation.navigate('LoginScreen')} />
            </SectionComponent>
        </ContainerComponent>
    );
}

export default RegisterScreen
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 20
    },
    register: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        gap: 2
    }
})