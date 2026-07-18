/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 */

const config = {
  project: {
    ios: {},
    android: {},
  },
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
  },
  transformer: {
    unstable_allowRequireContext: true,
  },
}

module.exports = config
