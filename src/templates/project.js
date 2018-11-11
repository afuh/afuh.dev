import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link } from "gatsby"
import PropTypes from 'prop-types'

import SEO from '../utils/seo'
import Layout from '../components/layout'

const Project = ({ data: { contentfulProject: project }, location }) => (
  <Layout location={location}>
    <SEO
      title={project.title}
      description={project.content.md.excerpt}
      pathname={location.pathname}
      image={project.image.fluid.src}
    />
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
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default Project

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      url
      code
      tags
      image {
        fluid(maxWidth: 960) {
          base64
          srcSet
          sizes
          src
          aspectRatio
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
