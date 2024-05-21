import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Swiper from 'react-native-swiper'
import { appInfo } from '../../constants/appInfos'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import { TextComponent } from '../../components'

const OnboardingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0)
  return (
    <View style={[globalStyles.container]} >
      <Swiper loop={false} activeDotColor='white' index={index} onIndexChanged={num => setIndex(num)}> 
          <Image source={require('../../assets/images/onboarding-4.png')} style={styles.image}/>
          <Image source={require('../../assets/images/onboarding-5.png')} style={styles.image}/>
          <Image source={require('../../assets/images/onboarding-6.png')} style={styles.image}/>
      </Swiper>
      <View style={styles.panigator}>
      <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
        <TextComponent text='Skip' color='white'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> index< 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')}>
        <TextComponent text='Next' color='white'/>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: appInfo.sizes.WIDTH,
    height: appInfo.sizes.HEIGHT,
    resizeMode:'cover'
  },
  panigator: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    position:'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  text: {
    color: appColors.white
  }
})