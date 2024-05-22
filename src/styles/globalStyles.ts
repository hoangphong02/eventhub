import { StyleSheet } from "react-native";
import { fontFamilies } from "../constants/fontFamilies";
import { appColors } from "../constants/appColors";

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center'
    },
    text: {
        fontFamily: fontFamilies.regular,
        fontSize: 14,
        color: appColors.text
    },
    buttons: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: appColors.white,
        paddingHorizontal: 16,
        paddingVertical:16,
        minHeight: 56,
        flexDirection:'row'
    },
    section: {
        paddingHorizontal: 16,
        paddingBottom: 20 
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})