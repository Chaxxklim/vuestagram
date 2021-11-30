module.exports = {
  publicPath : '/vuestagram',
    pwa: {
      name: '균창스타그램',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }