import React from 'react'
import Layout from 'components/layout/layout'
import SEO from 'components/seo/seo'

import { PageJumbotron } from 'components/common/jumbotron.styled'
import { Banner } from '../components/common/banner.styled'
import aboutImg from 'images/about.jpg'



const About = () => {
  return (
    <Layout>
      <SEO title='About' keywords={[`gatsby`, 'application']} />
      <PageJumbotron img={aboutImg} >
        <Banner
          title='ABOUT US'
          fontSize='2.5rem'
          subtitle='we serve best cocktails and fun in city'
        />
      </PageJumbotron>
    </Layout>
  )
}

export default About
