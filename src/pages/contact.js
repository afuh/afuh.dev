import React from 'react'

import { useSiteContent } from '../utils/hooks'

import Layout from '../components/layout'
import Contact from '../components/contact'

const ContactPage = () => {
  const { contactPage } = useSiteContent()

  return (
    <Layout heading="Contact">
      <Contact data={contactPage} />
    </Layout>
  )
}

export default ContactPage
