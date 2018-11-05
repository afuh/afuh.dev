const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const allTags = []

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  slug
                  tags
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
          const { slug, tags } = edge.node

          // create project page
          createPage({
            path: slug,
            component: path.resolve('src/templates/project.js'),
            context: {
              slug
            }
          })

          // get all tags
          tags.forEach(tag => {
            if (!allTags.includes(tag)) {
              allTags.push(tag)
            }

            // create a tag page
            createPage({
              path: `/tag/${tag}`,
              component: path.resolve('src/templates/tag.js'),
              context: {
                tag
              }
            })

          })
        })

        // create a tag index
        createPage({
          path: '/tag',
          component: path.resolve('src/templates/allTags.js'),
          context: {
            allTags
          }
        })
      })
    )
  })
}
