import React from 'react'
import Layout from 'components/layout/layout'
import SEO from 'components/seo/seo'

import Gallery from 'components/home/gallery'

import { PageJumbotron } from 'components/common/hero.styled'
import { Banner } from 'components/common/banner.styled'
import { Container } from 'components/common/container.styled'
import { Section } from 'components/common/section.styled'
import { SectionTitle } from 'components/common/title.styled'

import aboutImg from 'images/hero/about.jpg'


const About = () => (
  <Layout>
    <SEO title='About' keywords={[`gatsby`, 'application']} />
    <PageJumbotron img={aboutImg}>
      <Banner
        title='ABOUT US'
        subtitle='we serve best cocktails and fun in city'
        fontSize='2.5rem'
      />
    </PageJumbotron>
    <Container>
      <Section>
        <SectionTitle title='our gallery' message='let see us' />
        <Gallery />
      </Section>
    </Container>
  </Layout>
)


export default About
