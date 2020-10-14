import React from 'react'
import Layout from 'components/layout/layout'
import SEO from 'components/seo/seo'

import Gallery from 'components/home/galleryAll'

import { PageJumbotron } from 'components/common/jumbotron.styled'
import { Banner } from 'components/common/banner.styled'
import { Container } from 'components/common/container.styled'
import { Section } from 'components/common/section.styled'
import { Title } from 'components/common/title.styled'


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
      <Container>
        <Section>
          <Title title='our gallery' message='let see us' />
          <Gallery />
        </Section>
      </Container>
    </Layout>
  )
}

export default About
