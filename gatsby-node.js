const path = require('path')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(`
    {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allContentfulProject.edges.forEach(({ node }) => {
    const { slug } = node

    createPage({
      path: slug,
      component: path.resolve('src/templates/project.js'),
      context: {
        slug,
      },
    })
  })
}
