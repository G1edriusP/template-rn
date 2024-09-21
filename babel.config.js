module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.json', '.svg', '.png'],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@network': './src/common/network',
          '@data': './src/common/data',
          '@navigation': './src/common/navigation',
          '@translation': './src/common/translation',
          '@utils': './src/common/utils',
          '@screens': './src/ui/screens',
          '@components': './src/ui/components',
          '@styles': './src/ui/styles',
        },
      },
    ],
  ],
}
