import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout/layout'
import SEO from 'components/seo/seo'

import Story from 'components/home/story'
import Gallery from 'components/home/gallery'
import MenuItems from 'components/home/menuItems'
import GetInTouch from 'components/home/getInTouch'
import homeImg from 'images/hero/home.jpg'

import { HomeJumbotron } from 'components/common/hero.styled'
import { Banner } from 'components/common/banner.styled'
import { BannerButton } from 'components/common/button.styled'
import { Container } from 'components/common/container.styled'


const Home = () => (
  <Layout>
    <SEO title='Home' keywords={[`dalton`, `pub`, `cafee`]} />
    <HomeJumbotron img={homeImg} >
      <Banner
        title='dalton saloon pub'
        fontSize='3rem'
        subtitle='The best pub in downtown of Belgrade'
      >
        <Link to='/menu' style={{ textDecoration: 'none' }}>
          <BannerButton margin='2rem auto'>menu</BannerButton>
        </Link>
      </Banner>
    </HomeJumbotron>
    <Container>
      <Story />
      <Gallery />
      <MenuItems />
      <GetInTouch />
    </Container>
  </Layout>
)


export default Home


