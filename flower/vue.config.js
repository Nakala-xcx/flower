module.exports={
  chainWebpack:config=>{
    config.plugins.delete("prefetch")
  },
  devServer: {
    proxy: {
      '/' : {
        target:'http://127.0.0.1:5050',
        changeOrigin:true
      }
    }
  }
}