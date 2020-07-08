import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from './'

const query = graphql`
  {
    contentfulCuratedProjects {
  	  byCategory: projectsByCategory {
        projects {
          slug
        }
      }
    }
  }
`

export const usePagination = () => {
  const { location } = useLocation()
  const { contentfulCuratedProjects } = useStaticQuery(query)
  const pathname = location.pathname.replace(/\//g, '')
  const projects = contentfulCuratedProjects.byCategory.reduce((acc, item) => [
    ...acc,
    ...item.projects
  ], [])

  return projects.reduce((acc, project, i) => {
    if (project.slug === pathname) {
      return {
        next: projects.length === i + 1 ? acc.prev : projects[i + 1].slug,
        prev: i === 0 ? acc.next : projects[i - 1].slug
      }
    }
    return acc
  }, { prev: '', next: '' })
}
