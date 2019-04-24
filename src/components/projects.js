import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

const Projects = ({ data }) => (
  <ul>
    {data.map(project => (
      <li key={project.id}>
        <Link
          to={"/" + project.slug}
        >
          {project.title}
        </Link>
      </li>
    ))}
  </ul>
)

Projects.propTypes = {
  data: PropTypes.array.isRequired
}

export default Projects
