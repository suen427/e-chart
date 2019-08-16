module.exports = {
  outputDir: 'demo',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./src/demo/main.js')
  }
}
