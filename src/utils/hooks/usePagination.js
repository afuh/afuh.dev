import { useStaticQuery, graphql } from 'gatsby'
// eslint-disable-next-line import/no-unresolved
import { useLocation } from '@reach/router'

const query = graphql`
  {
    contentfulProjectList {
      projects {
        slug
      }
    }
  }
`

export const usePagination = () => {
  const location = useLocation()
  const pathname = location.pathname.replace(/\//g, '')
  const {
    contentfulProjectList: { projects },
  } = useStaticQuery(query)

  return projects.reduce(
    (acc, project, i) => {
      if (project.slug === pathname) {
        return {
          next: projects.length === i + 1 ? acc.prev : projects[i + 1].slug,
          prev: i === 0 ? acc.next : projects[i - 1].slug,
        }
      }
      return acc
    },
    { prev: '', next: '' },
  )
}
