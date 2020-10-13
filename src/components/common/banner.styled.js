import React from 'react'
import styled from 'styled-components'


export const Banner = ({ title, fontSize, subtitle, children }) => {
  return (
    <BannerWrapper>
      <BannerTitle fontSize={fontSize}>{title}</BannerTitle>
      <BannerSubtitle>{subtitle}</BannerSubtitle>
      <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aliquid ducimus mollitia asperiores vitae modi quisquam debitis harum dignissimos commodi?</Paragraph>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  /* margin-bottom: 3rem; */
  text-align: center;
`

const BannerTitle = styled.h1`
  color: ${({ theme }) => theme.colors.mainYellow};
  font-size: ${props => props.fontSize};
  text-transform: uppercase;
  letter-spacing: .75rem;
  font-family: var(--font-display);
`

const BannerSubtitle = styled.h3`
  color: ${({ theme }) => theme.colors.mainWhite};
  font-weight: 300;
  letter-spacing: .15rem;
  font-size: 1.5rem;
  text-transform: capitalize;
  font-family: var(--font-primary);
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.mainGray};
  max-width: 500px;
  font-size: .9rem;
  margin: 1rem auto;
`;

Banner.defaultProps = {
  title: 'default title',
}
