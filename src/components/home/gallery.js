import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import { Section } from 'components/common/section.styled'
import styled from 'styled-components'


const Gallery = () => {

  const data = useStaticQuery(GET_IMAGES)
  const images = data.getImages.edges

  return (
    <Section>
      <GalleryWrapperGrid>
        {
          images.map(({ node }, idx) => {
            return (
              <Item key={idx} className={`item-${idx + 1}`} >
                <Img fluid={node.childImageSharp.fluid} />
                <Info>Dalton Pub</Info>
              </Item>
            )
          })
        }
      </GalleryWrapperGrid>
    </Section>
  )
}

export const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: {relativeDirectory: { eq: "menu" }}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500, jpegQuality: 80) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Gallery


const GalleryWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
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
    'two two one one'
    'two two three three'
    'six four four four'
    'five four four four'
    ;

    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two
    }
    .item-3 {
      grid-area: three
    }
    .item-4 {
      grid-area: four
    }
    .item-5 {
      grid-area: five
    }  
    .item-6 {
      grid-area: six
    }  

  } 
`

const Item = styled.div`
  position: relative;
`

const Info = styled.p`
  position: absolute;
  z-index: 990;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.mainYellow};
  padding: .5rem;
  transform: skewX(-15deg) translate(-17px,-15px);
  text-transform: capitalize;
`


