import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout/layout'
import SEO from 'components/seo/seo'

import Info from 'components/home/info'
import Gallery from 'components/home/galleryAll.js'
import homeImg from 'images/pub.jpg'

import Container from 'react-bootstrap/Container'
import { HomeJumbotron } from 'components/common/jumbotron.styled'
import { Banner } from '../components/common/banner.styled'
import { BannerButton } from '../components/common/button.styled'


// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

const Home = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, 'application']} />
    <HomeJumbotron img={homeImg} >
      <Banner
        title='saloon dalton pub'
        fontSize='3rem'
        subtitle='The best pub in downtown of Belgrade'
      >
        <Link to='/menu/' style={{ textDecoration: 'none' }}>
          <BannerButton margin='2rem auto'>menu</BannerButton>
        </Link>
      </Banner>
    </HomeJumbotron>
    <Container>
      <Info />
      <Gallery />
    </Container>
  </Layout>
)



export default Home
