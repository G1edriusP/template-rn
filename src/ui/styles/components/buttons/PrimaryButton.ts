import { createStyleSheet } from 'react-native-unistyles'

import { dimensions } from '@data/constants/dimensions'

export default createStyleSheet((theme) => ({
  container: {
    width: '100%',
    height: theme.dimensions.size_42,
    borderRadius: dimensions.size_8,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.dimensions.size_14,
    fontFamily: theme.fonts.bold,
    color: theme.colors.black,
  },
}))
