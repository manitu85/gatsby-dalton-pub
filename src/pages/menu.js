import React from 'react'
import Layout from 'components/layout/layout'
import SEO from 'components/seo/seo'

import MenuItems from 'components/home/menuItems'

import { PageHero } from 'components/common/hero.styled'
import { Banner } from '../components/common/banner.styled'
import { Container } from 'components/common/container.styled'

import menuImg from 'images/hero/menu.jpg'


const Menu = () => {
  return (
    <Layout>
      <SEO title='Menu' keywords={[`menu`, 'cocktails', 'brew', 'breakfast']} />
      <PageHero img={menuImg} >
        <Banner
          title='menu'
          fontSize='2.5rem'
          subtitle='The best coffee and breakfast menu'
        />
      </PageHero>
      <Container>
        <MenuItems />
      </Container>
    </Layout>
  )
}


export default Menu
