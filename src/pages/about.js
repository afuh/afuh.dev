import React from 'react'

import { useSiteContent } from '../utils/hooks'

import Layout from '../components/layout'
import About from '../components/about'

const AboutPage = () => {
  const { aboutPage } = useSiteContent()

  return (
    <Layout heading='About'>
      <About text={aboutPage} />
    </Layout>
  )
}

export default AboutPage
