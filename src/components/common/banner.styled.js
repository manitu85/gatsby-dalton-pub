import React from 'react'
import styled from 'styled-components'


export const Banner = ({ title, fontSize, subtitle, children }) => {
  return (
    <BannerWrapper>
      <BannerTitle fontSize={fontSize}>{title}</BannerTitle>
      <BannerSubtitle>{subtitle}</BannerSubtitle>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`

const BannerTitle = styled.h1`
  color: ${({ theme }) => theme.colors.mainYellow};
  font-size: ${props => props.fontSize};
  text-transform: uppercase;
  letter-spacing: .75rem;
`

const BannerSubtitle = styled.h3`
  color: ${({ theme }) => theme.colors.mainWhite};
  font-weight: 300;
  font-style: oblique;
  letter-spacing: .15rem;
  font-size: 1.5rem;
  text-transform: capitalize;
`

Banner.defaultProps = {
  title: 'default title',
}
