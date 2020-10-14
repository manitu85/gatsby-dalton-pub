import React, { useState } from 'react'

import NavbarHeader from './navbarHeader'
import NavbarIcons from './navbarIcons'
import NavbarLinks from './navbarLinks'

import styled from 'styled-components'
import { Container } from 'components/common/container.styled'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleOnToggle = () => setIsOpen(!isOpen)

  return (
    <StyledFluid>
      <Container>
        <StyledNavWrapper>
          <NavbarHeader handleOnToggle={handleOnToggle} />
          <NavbarLinks handleNavbar={isOpen} />
          <NavbarIcons />
        </StyledNavWrapper>
      </Container>
    </StyledFluid>
  )
}

export default Navbar

const StyledNavWrapper = styled.nav`

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet} ) {
    display: flex;
    align-items: center;
  }

`
const StyledFluid = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryDark};
    position: fixed;
    z-index: 1060;
    width: 100%;
`


