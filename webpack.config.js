const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(process.cwd(), "./dist"),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".json"],
    alias: {
      "&": path.resolve(process.cwd(), "./src"),
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|ttf|eot|wav|mp3|mp4|avi|svg|woff(2)?)(\?[^('|")]*)?$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ["@babel/preset-typescript"],
              ["@babel/preset-react"]
            ]
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    // hot:true
    historyApiFallback: true,
    proxy: {
      //context: '/hello',
      /*  target: 'localhost:3000',  // 代理跨域目标接口 将后端代理到前端
       changeOrigin: true,
       secure: false,  // 当代理某些https服务报错时用
       cookieDomainRewrite: false ,// 可以为false，表示不修改 */
      /*  '/api': {
         changeOrigin: true,
         secure: false,  // 当代理某些https服务报错时用
         cookieDomainRewrite: false ,// 可以为false，表示不修改
         target: 'http://localhost:3000/api',
         pathRewrite: { '^/api': '' },
       }, */
    }
  },
  plugins: [
    new htmlWebpackPlugin({ template: './index.html' }),
    new miniCssExtractPlugin({
      filename:'[name].[hash].css'
  }) 
  ]
};