import React from 'react'

import { Button, Text, View } from 'react-native'

import { Screens } from '@navigation/constants/Screens'
import { DashboardScreenNavigationProp } from '@navigation/types'

const DashboardScreen = ({ navigation }: DashboardScreenNavigationProp) => {
  return (
    <View>
      <Text>Dashboard screen</Text>
      <Button title='To Profile' onPress={() => navigation.navigate(Screens.PROFILE_SCREEN)} />
    </View>
  )
}

export default DashboardScreen
