import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from './'

const query = graphql`
  {
    contentfulProjects {
      projects {
        slug
      }
    }
  }
`

export const usePagination = () => {
  const { location } = useLocation()
  const { contentfulProjects } = useStaticQuery(query)
  const { projects } = contentfulProjects

  const pathname = location.pathname.replace(/\//g, "")

  return projects.reduce((acc, project, i) => {
    if (project.slug === pathname) {
      return {
        next: projects.length === i + 1 ? null : `/${projects[i + 1].slug}`,
        prev: i === 0 ? null : `/${projects[i - 1].slug}`
      }
    }
    return acc
  }, {})
}
