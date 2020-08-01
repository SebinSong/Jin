const path = require('path');

const resolvePath = relPath => path.resolve(__dirname, relPath)
const appSrc = resolvePath('src')

module.exports = {
  outputDir: 'docs',
  configureWebpack: {
    resolve: {
      alias: {
        '@': appSrc,
        '@components': path.join(appSrc, 'views/components'),
        '@pages': path.join(appSrc, 'views/pages'),
        '@utils': path.join(appSrc, 'views/utils'),
        '@controller': path.join(appSrc, 'controller')
      }
    }
  }
}