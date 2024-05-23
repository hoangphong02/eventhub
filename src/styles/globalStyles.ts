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
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: appColors.white,
        paddingHorizontal: 10,
        paddingVertical:10,
        minHeight: 40,
        flexDirection:'row'
    },
    section: {
        paddingHorizontal: 20,
        paddingBottom: 20 
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})