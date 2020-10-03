const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allContentfulProject {
            group(field: tags) {
              name: fieldValue
              totalCount
            }
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const { allContentfulProject } = result.data

        allContentfulProject.edges.forEach(({ node }) => {
          const { slug } = node

          // create project page
          createPage({
            path: slug,
            component: path.resolve('src/templates/project.js'),
            context: {
              slug,
            },
          })
        })

        // create a tag page
        allContentfulProject.group.forEach(({ name }) => {
          createPage({
            path: `/tag/${name}`,
            component: path.resolve('src/templates/tag.js'),
            context: {
              tag: name,
            },
          })
        })

        // create a tag index
        createPage({
          path: '/tag',
          component: path.resolve('src/templates/allTags.js'),
          context: {
            tags: allContentfulProject.group,
          },
        })
      }),
    )
  })
}
