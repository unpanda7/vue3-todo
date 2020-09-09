const path = require("path")

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  devServer: {
    port: "9000",
    open: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    }    
  }
};
