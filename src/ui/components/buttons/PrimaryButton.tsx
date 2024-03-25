import React, { memo } from 'react'

import { Text, TouchableOpacity } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import stylesheet from '@styles/components/buttons/PrimaryButton'

interface PrimaryButtonType {
  title: string
  onPress: () => void
}

const PrimaryButton = memo(({ title, onPress }: PrimaryButtonType) => {
  const { styles } = useStyles(stylesheet)

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
})

PrimaryButton.displayName = 'PrimaryButton'
export default PrimaryButton
