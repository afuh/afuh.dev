import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { List, Inner } from '../utils/UI'

const AllTags = ({ pageContext: { allTags } }) => {
  const formatTags = allTags.reduce((acc, tag) => [
    ...acc,
    {
      id: tag,
      slug: 'tag/' + tag,
      title: tag
    }
  ], [])

  return (
    <Layout heading='tags'>
      <Inner
        as='section'
        paddingTop
      >
        <List data={formatTags} />
      </Inner>
    </Layout>
  )
}

AllTags.propTypes = {
  pageContext: PropTypes.shape({
    allTags: PropTypes.array
  }).isRequired
}

export default AllTags
