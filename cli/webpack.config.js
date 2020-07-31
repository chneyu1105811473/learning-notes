const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    cxy: path.join(__dirname,'src/main.js')
  },
  output:{
    path: path.join(__dirname,'dist'),
    filename:'cxy.js'
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    port:'9999',
    open: false //浏览器是否自动运行
  },
  module:{
    rules:[{
      //使用vue-loader解析.vue文件
      test:/\.vue$/,
      loader:'vue-loader',
      include: path.resolve(__dirname,'src')
    },{
      test:/\.css$/,
      //要加上style-loader才能解析.vue文件里面的<style>标签里面的内容
      loader:['style-loader','css-loader']
    }]
  },
  plugins:[
    new VueLoaderPlugin(), //最新版本的style-loader需要配置插件
    new CleanWebpackPlugin(),//每次运行时都清空dist文件夹
    new HtmlWebpackPlugin({  //模板文件会自动加入出口js文件
      template:'./public/index.html'
    })
  ],
  mode:'development'
}