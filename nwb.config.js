module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Sidebar',
      externals: {
        react: 'React'
      }
    }
  }
}
