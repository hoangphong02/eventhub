import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardType } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { EyeSlash } from 'iconsax-react-native'
import { appColors } from '../constants/appColors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { globalStyles } from '../styles/globalStyles'
interface Props {
    value: string,
    onChange: (val: string) => void
    affix?: ReactNode
    placeholder?: string 
    suffix?: ReactNode
    isPassword?: boolean
    allowClear ?: boolean
    type?: KeyboardType
}
const InputComponent = (props: Props) => {
    const {value, onChange, affix, placeholder, suffix, isPassword, allowClear, type } = props
    const [isShowPass, setIsShowPass] = useState(isPassword ?? false)
  return (
    <View style={styles.container}>
      {affix ?? affix}
      <TextInput placeholder={placeholder} onChangeText={(val)=> onChange(val)} secureTextEntry={isShowPass} value={value} style={[styles.input, globalStyles.text]} placeholderTextColor={'#747688'} keyboardType={type?? 'default'}/>
    {suffix ?? suffix}
    <TouchableOpacity 
        onPress={isPassword ? ()=> setIsShowPass(!isShowPass) : ()=>onChange('')}
    >
        {isPassword ? (
            <EyeSlash size={22} color={appColors.gray}/>
        ):(
            value.length > 0 && allowClear && (
                <AntDesign name='close' size={20} color={appColors.text}/>
            )
        )}
    </TouchableOpacity>
    </View>
  )
}

export default InputComponent;
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: appColors.gray,
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    },
    input:{
        flex: 1,
        paddingHorizontal: 10,
        color: appColors.text
    }
})