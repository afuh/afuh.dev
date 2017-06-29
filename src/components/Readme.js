import ReactMarkdown from 'react-markdown';
import React from 'react'


const Readme = () => {
  return (
    <div className="projects">
      <ReactMarkdown source={'# Markdown\n\n## Podría ser'} />
    </div>
  )
}

export default Readme
