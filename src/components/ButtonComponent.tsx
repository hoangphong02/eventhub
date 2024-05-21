import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent'
import { globalStyles } from '../styles/globalStyles'
import { appColors } from '../constants/appColors'
import { fontFamilies } from '../constants/fontFamilies'

interface Props{
    icon? : ReactNode,
    text?: string,
    type?: 'primary' | 'text' | 'link',
    color?: string,
    styles?: StyleProp<ViewStyle>,
    textColor?: string,
    textStyle?: StyleProp<TextStyle>,
    onPress?:()=> void,
    iconFlex?: 'right' | 'left',
}
const ButtonComponent = (props: Props) => {
    const {icon, text, type, color, styles, textStyle, onPress, iconFlex, textColor} = props
  return (
    type === 'primary' ?
    (
    <TouchableOpacity style={[globalStyles.buttons, {backgroundColor: color ?? appColors.primary}, styles ]} onPress={onPress}>
        {icon && icon  }
        <TextComponent text={text} color={textColor ?? appColors.white} font={fontFamilies.semiBold} styles={[textStyle,{marginLeft: icon? 12: 0}]}
        flex={icon && iconFlex === 'right'? 1: 0}
        />
        {icon && iconFlex=== 'right' && icon }
    </TouchableOpacity>
    ) : (
        <TouchableOpacity>
            <TextComponent text={text} color={type === 'link'? appColors.link : appColors.text}/>
        </TouchableOpacity>
    )
  )
}

export default ButtonComponent