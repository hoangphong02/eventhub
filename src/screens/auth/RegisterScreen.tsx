import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { InputComponent, SectionComponent, ContainerComponent, ButtonComponent, TextComponent } from '../../components';
import { globalStyles } from '../../styles/globalStyles';
import { Call, Key, Sms, User } from 'iconsax-react-native';
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
                    // marginTop: 75,
                }}>
                <Image
                    source={require('../../assets/images/thuocsi.png')}
                    style={{
                        resizeMode: 'contain',
                        height: 50,
                        marginBottom: 10,
                    }}
                />
            </SectionComponent>
            <SectionComponent styles={[globalStyles.container, styles.container]}>
                <InputComponent placeholder='Tên' value={name} onChange={(val) => setName(val)} allowClear affix={<User size={20} color={appColors.text} />} />
                <InputComponent placeholder='Email' type='email-address' value={email} onChange={(val) => setEmail(val)} allowClear affix={<Sms size={20} color={appColors.text} />} />
                <InputComponent placeholder='Số điện thoại' value={phone} onChange={(val) => setPhone(val)} allowClear affix={<Call size={20} color={appColors.text} />} />
                <InputComponent placeholder='Mật khẩu' value={password} onChange={(val) => setPassword(val)} isPassword affix={<Key size={20} color={appColors.text} />} />
                <InputComponent placeholder='Mật khẩu xác nhận' value={confirmPassword} onChange={(val) => setConfirmPassword(val)} isPassword affix={<Key size={20} color={appColors.text} />} />

            </SectionComponent>
            <SectionComponent >
                <ButtonComponent text='Đăng ký' type='primary' disabled={isDisabled} />
            </SectionComponent>
            <SectionComponent styles={styles.register}>
                <TextComponent text='Bạn đã có tài khoản? ' />
                <ButtonComponent text='Đăng nhập ngay' type='link' onPress={() => navigation.navigate('LoginScreen')} />
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