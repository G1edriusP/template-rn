import React from 'react'

import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import stylesheet from '@styles/screens/bottom/ProfileScreen'

import { PrimaryButton } from '@components'

import { Screens } from '@navigation/constants/Screens'
import { ProfileScreenNavigationProp } from '@navigation/types'

const ProfileScreen = ({ navigation }: ProfileScreenNavigationProp) => {
  const { styles } = useStyles(stylesheet)
  const { t } = useTranslation()

  const onNavigatePress = () => navigation.navigate(Screens.DASHBOARD_SCREEN)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('screens.profile')}</Text>
      <PrimaryButton title={t('screens.dashboard')} onPress={onNavigatePress} />
    </View>
  )
}

export default ProfileScreen
