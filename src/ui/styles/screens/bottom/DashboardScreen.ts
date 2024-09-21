import { createStyleSheet } from 'react-native-unistyles'

export default createStyleSheet((theme) => ({
  container: {
    flex: 1,
    padding: theme.dimensions.size_24,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.dimensions.size_8,
  },
  title: {
    fontSize: theme.dimensions.size_24,
    fontFamily: theme.fonts.regular,
    color: theme.colors.black,
  },
}))
