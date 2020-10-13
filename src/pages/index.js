import React from 'react'

import Layout from 'components/layout/layout'
import SEO from 'components/seo/seo'

import { HomeJumbotron } from 'components/common/jumbotron.styled'
import { Banner } from '../components/common/banner.styled'
import homeImg from 'images/pub.jpg'

import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'


const Home = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, 'application']} />
    <HomeJumbotron img={homeImg} >
      <Banner
        title='DALTON PUB'
        fontSize='3.5rem'
        subtitle='The best pub in downtown of Belgrade'
      />
    </HomeJumbotron>
    <Container>
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
      OTHER SECTION
    </Container>
  </Layout>
)



export default Home
