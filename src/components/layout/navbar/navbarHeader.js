import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from 'images/logo/dalton-logo.png'
import { CgMenuGridO } from 'react-icons/cg'

// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'


const NavbarHeader = ({ handleOnToggle }) => {

  return (
    <StyledHeaderWrapper>
      <Link to='/'>
        <StyledLogo />
        <span>Saloon Pub</span>
      </Link>
      <StyledIconWrapper>
        <CgMenuGridO onClick={e => handleOnToggle()} />
      </StyledIconWrapper>
    </StyledHeaderWrapper>
  )
}

export default NavbarHeader

const StyledHeaderWrapper = styled.div`
  padding-top: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${({ theme }) => theme.colors.primaryLight};
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-family: var(--font-display);

    span {
      display: block;
      color: ${({ theme }) => theme.colors.mainYellow};
    }
  }
`

const StyledLogo = styled.img.attrs({
  src: logo,
  alt: 'Dalton-pub',
})`
  margin-left: 5px;
  width: 6rem;
  height: 4rem;
`

const StyledIconWrapper = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.mainYellow};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

// const SITE_LOGO = graphql`
//   {
//     logo: file(relativePath: {eq: "logo/logo.jpg"}) {
//       childImageSharp {
//         fluid(jpegQuality: 75, ) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `