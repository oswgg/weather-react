const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rulesForJavaScript = {
   test: /\.?js$/,
   exclude: /node_modules/,
   use: {
      loader: 'babel-loader',
      options: {
         presets: [['@babel/preset-react', { runtime: 'automatic' }]],
      },
   },
}

const rulesForStyles = {
   test: /\.css$/i,
   use: ['style-loader', 'css-loader', 'postcss-loader'],
}

module.exports = {
   entry: path.join(__dirname, 'src', 'index.js'),
   output: {
      path: path.resolve(__dirname, 'public'),
   },
   module: {
      rules: [rulesForJavaScript, rulesForStyles],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.join(__dirname, 'src', 'index.html'),
      }),
   ],
   devServer: {
      open: true,
      port: 8080,
   }
}
