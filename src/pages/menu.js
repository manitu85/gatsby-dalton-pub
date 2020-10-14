import React from 'react'
import Layout from 'components/layout/layout'
import SEO from 'components/seo/seo'

import MenuItems from 'components/home/menuItems'

import { PageJumbotron } from 'components/common/jumbotron.styled'
import { Banner } from '../components/common/banner.styled'
import { Container } from 'components/common/container.styled'

import menuImg from 'images/menu/menu-1.jpg'


const Menu = () => {
  return (
    <Layout>
      <SEO title='Menu' keywords={[`menu`, 'cocktails', 'brew', 'breakfast']} />
      <PageJumbotron img={menuImg} >
        <Banner
          title='menu'
          fontSize='2.5rem'
          subtitle='The best coffee and breakfast menu'
        />
      </PageJumbotron>
      <Container>
        <MenuItems />
      </Container>
    </Layout>
  )
}


export default Menu
