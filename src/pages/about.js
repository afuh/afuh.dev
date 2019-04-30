import React from 'react'

import { useSiteContent } from '../utils/hooks'

import Layout from '../components/layout'
import About from '../components/about'

const AboutPage = () => {
  const { aboutPage } = useSiteContent()

  return (
    <Layout heading='About'>
      <About data={aboutPage} />
    </Layout>
  )
}

export default AboutPage
