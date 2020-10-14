import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import { Section } from 'components/common/section.styled'
import styled from 'styled-components'



const Gallery = () => {

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "menu/menu-1.jpg" }) {
          childImageSharp {
            fluid(jpegQuality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        },
      img2: file(relativePath: { eq: "menu/menu-4.jpg" }) {
          childImageSharp {
            fluid(jpegQuality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        },
      img3: file(relativePath: { eq: "menu/menu-3.jpg" }) {
          childImageSharp {
            fluid(jpegQuality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      },
  `)

  return (
    <Section>
      <GalleryWrapperGrid>
        <Item className="item-1">
          <Img fluid={data.img1.childImageSharp.fluid} />
          <Info>Lorem ipsum</Info>
        </Item>
        <Item className="item-2">
          <Img fluid={data.img2.childImageSharp.fluid} />
          <Info>Lorem ipsum</Info>
        </Item>
        <Item className="item-3">
          <Img fluid={data.img3.childImageSharp.fluid} />
          <Info>Lorem ipsum</Info>
        </Item>
      </GalleryWrapperGrid>
    </Section>
  )
}

export default Gallery

const GalleryWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    
    grid-template-areas: 
    'one one two two'
    'one one three three';

    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two
    }
    .item-3 {
      grid-area: three
    }
 
  }

 
`

const Item = styled.div`
  position: relative;

  
`

const Info = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.mainYellow};
  padding: .5rem;
  transform: skewX(-15deg) translate(-17px,-15px);
  text-transform: capitalize;
`


