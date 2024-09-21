import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import stylesheet from '@styles/screens/bottom/DashboardScreen'

import { PrimaryButton } from '@components'

import { Language } from '@data/types/language/Language'

import { Screens } from '@navigation/constants/Screens'
import { DashboardScreenNavigationProp } from '@navigation/types'

const DashboardScreen = ({ navigation }: DashboardScreenNavigationProp) => {
  const { styles } = useStyles(stylesheet)
  const { t, i18n } = useTranslation()

  const [language, setLanguage] = useState(Language.LT)

  const onNavigatePress = () => navigation.navigate(Screens.PROFILE_SCREEN)
  const changeLanguage = () => {
    i18n.changeLanguage(language === Language.LT ? Language.EN : Language.LT)
    setLanguage((old) => (old === Language.LT ? Language.EN : Language.LT))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('screens.dashboard')}</Text>
      <PrimaryButton title={t('screens.profile')} onPress={onNavigatePress} />
      <PrimaryButton title={'Pakeisti kalbą'} onPress={changeLanguage} />
    </View>
  )
}

export default DashboardScreen
