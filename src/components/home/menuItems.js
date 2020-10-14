import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Product from './product'

import { Section } from 'components/common/section.styled'
import { SectionTitle } from 'components/common/title.styled'
import { SectionButton } from 'components/common/button.styled'

const PRODUCTS = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          id
          name
          price
          ingredients
          image {
            fixed(width: 125, height: 125) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const MenuItems = () => {

  const data = useStaticQuery(PRODUCTS)
  const products = data.items.edges

  return (
    <Section>
      <SectionTitle title='our menu' message='little taste of' />
      <ProductsList>
        {
          products.map(({ node }) => (
            <Product key={node.id} product={node} />
          ))
        }
      </ProductsList>
    </Section>
  )
}

export default MenuItems

const ProductsList = styled.div`
  margin: 5rem 0 2.5rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
`;