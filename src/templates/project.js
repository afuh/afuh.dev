import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from "gatsby"
import PropTypes from 'prop-types'

import Layout from '../components/layout'

const Project = ({ data: { project } }) => (
  <Layout
    heading={project.title}
    seo={{
      title: project.title,
      description: project.content.md.excerpt,
      pathname: "/" + project.slug,
      image: {
        url: project.image.file.url,
        contentType: project.image.file.contentType,
        size: project.image.file.details.image
      }
    }}
  >
    <h1>{project.title}</h1>
    <div style={{ maxWidth: 960 }}>
      <Img
        fluid={project.image.fluid}
        alt={project.title}
      />
    </div>
    <div>
      <a href={project.url}>Live</a>
      <a href={project.code}>Code</a>
    </div>
    <div dangerouslySetInnerHTML={{ __html: project.content.md.html }} />
    <div>
      {project.tags.map(tag => (
        <code key={tag} style={{ marginRight: 20 }}>
          <Link to={`/tag/${tag}`}>{tag}</Link>
        </code>
      ))}
    </div>
  </Layout>
)

Project.propTypes = {
  data: PropTypes.object.isRequired
}

export default Project

export const pageQuery = graphql`
  query($slug: String!) {
    project: contentfulProject(slug: { eq: $slug }) {
      title
      slug
      url
      code
      tags
      image {
        fluid(maxWidth: 960) {
          ...GatsbyContentfulFluid_withWebp
        }
        file {
          url
          contentType
          details {
            image {
              width
              height
            }
          }
        }
      }
      content {
        md: childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`
