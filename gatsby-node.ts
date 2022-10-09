import path from 'path'

import type { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage, createRedirect } }) => {
  createRedirect({ fromPath: '/contact', toPath: '/', isPermanent: true })
  createRedirect({ fromPath: '/about', toPath: '/', isPermanent: true })

  const { data } = await graphql<Queries.ContentfulProjectsQuery>(`
    query ContentfulProjects {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data?.allContentfulProject.edges.forEach(({ node }) => {
    const { slug } = node

    createPage({
      path: slug as string,
      component: path.resolve('src/templates/project.js'),
      context: {
        slug,
      },
    })
  })
}
