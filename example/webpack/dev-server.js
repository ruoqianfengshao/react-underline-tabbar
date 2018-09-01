const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.config')

const compiler = webpack(config)
const devServer = new WebpackDevServer(compiler, {
  disableHostCheck: true,
  compress: true,
  contentBase: './build',
  host: '0.0.0.0',
  historyApiFallback: true,
  inline: false,
  hot: false,
})

devServer.listen(9091, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Starting the development server: http://127.0.0.1:9091')
  }
})
