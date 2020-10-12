import React, { useState } from 'react'
import styled from 'styled-components'
import NavbarHeader from './navbarHeader'
import NavbarIcons from './navbarIcons'
import NavbarLinks from './navbarLinks'
import Container from 'react-bootstrap/Container'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  // const handleOnToggle = () => setIsOpen(!isOpen)

  return (
    <Container>
      <StyledNavWrapper>
        {/* <NavbarHeader handleNavbar={isOpen} /> */}
        <NavbarHeader handleOnToggle={e => setIsOpen(!isOpen)} />
        <NavbarLinks handleOnToggle={e => setIsOpen(!isOpen)} />
        <NavbarIcons />
      </StyledNavWrapper>
    </Container>
  )
}

export default Navbar

const StyledNavWrapper = styled.nav`

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet} ) {
    display: flex;
    align-items: center;
  }

`


