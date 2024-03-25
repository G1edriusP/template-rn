import React from 'react'

import { Button, Text, View } from 'react-native'

import { Screens } from '@navigation/constants/Screens'
import { ProfileScreenNavigationProp } from '@navigation/types'

const ProfileScreen = ({ navigation }: ProfileScreenNavigationProp) => {
  return (
    <View>
      <Text>Profile screen</Text>
      <Button title='To Dashboard' onPress={() => navigation.navigate(Screens.DASHBOARD_SCREEN)} />
    </View>
  )
}

export default ProfileScreen
