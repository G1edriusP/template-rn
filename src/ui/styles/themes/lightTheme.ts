import { dimensions } from '@data/constants/dimensions'
import { fonts } from '@data/constants/fonts'

import { scale } from '@utils/scale'

export const lightTheme = {
  colors: {
    primary: '#FBB168',
    secondary: '#3C2C32',
    white: '#FAFAFA',
    black: '#1F1F1F',
    success: '#ACE894',
    danger: '#D05353',
  },
  dimensions: {
    size_8: scale(dimensions.size_8),
    size_14: scale(dimensions.size_14),
    size_24: scale(dimensions.size_24),
    size_42: scale(dimensions.size_42),
  },
  fonts: {
    regular: fonts.regular,
    bold: fonts.bold,
  },
} as const
