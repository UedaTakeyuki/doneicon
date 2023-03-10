module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css:{
    extract:false  
  },
  chainWebpack: (config) => {
    // https://qiita.com/uturned0/items/5fdf2d92548274fe56e3
    // https://rinoguchi.net/2020/05/vue-firebase-reduce-bundle-size.html
    // https://stackoverflow.com/questions/66179210/how-to-externalize-a-lib-with-vue-cli
    config.externals({
      vue: 'Vue',
      vuetify: 'Vuetify',
      'vue-router': 'VueRouter',
//      'vuetify/lib': 'Vuetify',
//      'qrcode-of-this-site2':'QRcode',
    })
  }
}
