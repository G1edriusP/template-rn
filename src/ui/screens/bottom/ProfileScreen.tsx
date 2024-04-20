import React from 'react'

import { Text, View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import stylesheet from '@styles/screens/bottom/ProfileScreen'

import { PrimaryButton } from '@components'

import { Screens } from '@navigation/constants/Screens'
import { ProfileScreenNavigationProp } from '@navigation/types'

const ProfileScreen = ({ navigation }: ProfileScreenNavigationProp) => {
  const { styles } = useStyles(stylesheet)

  const onNavigatePress = () => navigation.navigate(Screens.DASHBOARD_SCREEN)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile screen</Text>
      <PrimaryButton title='To Dashboard' onPress={onNavigatePress} />
    </View>
  )
}

export default ProfileScreen
