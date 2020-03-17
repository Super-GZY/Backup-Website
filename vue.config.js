const path = require('path')

module.exports = {
  publicPath:  './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  devServer:{
    host:'0.0.0.0',
    port:8000,
    https: false,
    hotOnly: false,
  }
}

