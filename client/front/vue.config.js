const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 5445,
    historyApiFallback: true,
    // Проксируем путь /api для работы с бэкэндом
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        pathRewrite: { '^api': '' },
      },
    },
  },
})