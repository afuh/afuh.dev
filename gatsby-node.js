const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        siteConfig: path.resolve(__dirname, "siteConfig")
      },
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  })
}
