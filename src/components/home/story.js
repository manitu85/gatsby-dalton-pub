import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Section } from 'components/common/section.styled'
import { SectionTitle } from 'components/common/title.styled'
import { SectionButton } from 'components/common/button.styled'


const Story = () => {
  return (
    <Section>
      <SectionTitle message="let us tell you" title="our story" />
      <InfoWrapper>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          blanditiis dolorum quae doloremque molestias expedita, eum voluptas
          distinctio! Molestiae fuga temporibus nemo non vel mollitia nesciunt
          quaerat facere voluptate earum. Fuga temporibus nemo non vel mollitia nesciunt
          quaerat facere voluptate earum.
        </p>
        <Link to="/about/" style={{ textDecoration: 'none' }}>
          <SectionButton margin='2rem auto'>about</SectionButton>
        </Link>
      </InfoWrapper>
    </Section>
  )
}

export default Story


const InfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  font-size: .9rem;

  .text {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.mainWhite};
    word-spacing: 0.2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet} ) {
    width: 80%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 70%;
  }
`