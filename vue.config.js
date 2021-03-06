const registerRouter = require('./backend/router')
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/variable.scss";@import "~@/assets/scss/mixin.scss";`,
      },
    },
  },
  devServer: {
    before(app) {
      registerRouter(app)
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map',
  },
}
