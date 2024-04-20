import React from 'react'

import { Text, View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import stylesheet from '@styles/screens/bottom/DashboardScreen'

import { PrimaryButton } from '@components'

import { Screens } from '@navigation/constants/Screens'
import { DashboardScreenNavigationProp } from '@navigation/types'

const DashboardScreen = ({ navigation }: DashboardScreenNavigationProp) => {
  const { styles } = useStyles(stylesheet)

  const onNavigatePress = () => navigation.navigate(Screens.PROFILE_SCREEN)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard screen</Text>
      <PrimaryButton title='To Profile' onPress={onNavigatePress} />
    </View>
  )
}

export default DashboardScreen
