import { Configuration, Plugin, EnvironmentPlugin } from 'webpack'

const HtmlWebpackPlugin = require('html-webpack-plugin')
//import { default as HtmlWebpackPlugin } from 'html-webpack-plugin'


const TsConfigWebpackPlugin = require('ts-config-webpack-plugin')

// need to specify full path to entry and output path.
const config: Configuration = {
  entry: {
    app: `${__dirname}/src/App.tsx`,
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },
  plugins: [
    new TsConfigWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/html/index.template.html',
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  }
}

export default config
