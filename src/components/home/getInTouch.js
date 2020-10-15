import React from 'react'
import { TiLocation } from 'react-icons/ti'

import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import styled from 'styled-components'
import { Container } from 'components/common/container.styled'
import { Section } from 'components/common/section.styled'
import { SectionTitle } from 'components/common/title.styled'


const GetInTouch = () => {

  const data = useStaticQuery(CONTACT_IMAGE)
  const { fluid } = data.file.childImageSharp

  return (
    <Section>
      <SectionTitle title='contact' message='get in touch' />
      <Container>
        <ContactWrapper>
          <Img
            style={{ borderRadius: '25px' }}
            fluid={fluid} />
          <ContactInfo>
            <h3 className='reserve'>Call us</h3>
            <p className='address'>Visnjicka 49 - Karaburma,</p>
            <p>+381 60 123 123</p>
            <p>daltonpub@yahoo.com</p>
            <p className='city'><TiLocation />{' '}Belgrade</p>
          </ContactInfo>
        </ContactWrapper>
      </Container>
    </Section>
  )
}


export const CONTACT_IMAGE = graphql`
  {
    file(relativePath: { eq: "contact/contact-3.png" }) { 
      childImageSharp {
        fluid(jpegQuality: 100, maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },
  }
`

export default GetInTouch


const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin-top: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: var(--font-primary);
  padding: 2rem 0;
  margin-left: 4rem;

  > p {
    margin-bottom: .4rem;
  }
    
  .reserve {
    font-size: 2.5rem;
    font-family: var(--font-display);
    color: ${({ theme }) => theme.colors.mainYellow}; 
  }

  .address {
    font-size: 1.5rem;
  }
`