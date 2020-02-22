import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { List, Inner } from '../components/shared'

const AllTags = ({ pageContext: { tags } }) => {
  const formatTags = tags.map(tag => ({
    slug: `tag/${tag.name}`,
    title: `${tag.name} (${tag.totalCount})`
  }))

  return (
    <Layout heading='tags'>
      <Inner
        as='section'
        margin
      >
        <List data={formatTags} />
      </Inner>
    </Layout>
  )
}

AllTags.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.array
  }).isRequired
}

export default AllTags
