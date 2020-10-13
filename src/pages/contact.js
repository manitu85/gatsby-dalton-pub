import React from 'react'
import Layout from 'components/layout/layout'
import SEO from 'components/seo/seo'

import { PageJumbotron } from 'components/common/jumbotron.styled'
import { Banner } from '../components/common/banner.styled'
import contactImg from 'images/contact-1.jpg'


const Contact = () => {
  return (
    <Layout>
      <SEO title='Contact' keywords={[`gatsby`, 'application']} />
      <PageJumbotron img={contactImg}>
        <Banner
          title='contact'
          fontSize='2.5rem'
          subtitle='Visnjicka 49 - Karaburma, Belgrade'
        />
      </PageJumbotron>
    </Layout>
  )
}

export default Contact