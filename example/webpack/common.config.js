const path = require('path')

const isDev = process.env.NODE_ENV === 'development'
const context = path.join(__dirname, './../')

module.exports = {
  isDev,
  context,
  mode: 'none',
  devtool: isDev ? 'false' : 'source-map',
  resolve: {
    alias: {
      react: 'react',
      'react-native': 'react-native-web',
      'react-underline-tabbar': path.join(context, './../src'),
      animated: path.join(context, './node_modules/animated'),
    },
    modules: [path.join(context, 'web_modules/node_modules'), 'node_modules'],
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
}
