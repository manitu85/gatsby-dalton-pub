import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from 'images/dalton-logo.png'
import { CgMenuGridO } from 'react-icons/cg'

const NavbarHeader = ({ handleOnToggle }) => {
  console.log('handleOnToggle', handleOnToggle)

  return (
    <StyledHeaderWrapper>
      <Link to='/' >
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
  padding: .8rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;


  a {
    color: ${({ theme }) => theme.colors.primaryLight};
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: var(--font-display);

  }
`

const StyledLogo = styled.img.attrs({
  src: logo,
  alt: 'Dalton-pub'
})`
  margin-right: 10px;

  width: 6rem;
  height: 4rem;
`;

const StyledIconWrapper = styled.div`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.mainYellow};
    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet} ) {
      display: none;
    }
`

