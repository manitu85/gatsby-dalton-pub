import React, { useState } from 'react'
import { FaFacebookMessenger, FaInstagram, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import logo from 'images/dalton-logo.png'


const Footer = () => {

  const [social] = useState({
    icons: [
      {
        id: 1,
        icon: <FaFacebookMessenger className="icon facebook-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: `https://www.facebook.com`,
      },
    ],
  })

  const socialIcons = social.icons.map(item => (
    <a
      href={item.path}
      key={item.id}
      target="_blank"
      rel="noopener noreferrer"
    >
      {item.icon}
    </a>
  ))

  return (
    <FooterWrapper>
      <StyledLogo />
      <FooterTitle>Saloon Pub</FooterTitle>
      <IconsWrapper>
        {socialIcons}
      </IconsWrapper>
      <Copyright>copyright &copy;{new Date().getFullYear()}</Copyright>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.primaryDark}; 
  text-align: center;
`

const FooterTitle = styled.h3`
  color: ${({ theme }) => theme.colors.mainYellow}; 
  text-align: center;
  text-transform: uppercase;
  padding: 0.3rem 1rem;
  margin: 0 auto .5rem auto;
  font-size: 1.5rem;
  border: ${({ theme }) => theme.colors.mainYellow}; 
`

const StyledLogo = styled.img.attrs({
  src: logo,
  alt: 'Dalton-pub'
})`
  width: 6rem;
  height: 4rem;
`;

const IconsWrapper = styled.div`
  width: 5rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  .icon {
    color: ${({ theme }) => theme.colors.mainWhite}; 
    font-size: 1.3rem;
    transition: ${({ theme }) => theme.transitions.smooth}; 
    &:hover {
      color: ${({ theme }) => theme.colors.mainYellow}; 
    }
  }
`

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.mainWhite}; 
  text-transform: capitalize;
  text-align: center;
  margin: 1rem 0;
`