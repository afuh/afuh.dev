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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const component = path.resolve('src/templates/project.js')
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allContentfulProject.edges.forEach(edge => {
          const { slug } = edge.node
          createPage({
            path: slug,
            component,
            context: {
              slug
            }
          })
        })
      })
    )
  })
}
