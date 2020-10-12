import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavbarLinks = ({ handleNavbar }) => {

  const [url] = useState({
    links: [
      {
        id: 0,
        path: '/',
        name: 'home'
      },
      {
        id: 1,
        path: '/about/',
        name: 'about'
      },
      {
        id: 2,
        path: '/menu/',
        name: 'menu'
      },
      {
        id: 3,
        path: '/contact/',
        name: 'contact'
      },
    ],
  })

  return (
    <StyledLinkWrapper open={handleNavbar}>
      {
        url.links.map(link =>
          <StyledLinkItem key={link.id}>
            <Link to={link.path} >{link.name}</Link>
          </StyledLinkItem>
        )
      }
    </StyledLinkWrapper>
  )
}

export default NavbarLinks


const StyledLinkWrapper = styled.ul`
  overflow: hidden;
  height: ${props => props.open ? '150px' : 0};
   /* transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'}; */
   /* background: red; */

   transition: ${({ theme }) => theme.transitions.smooth};

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: flex;
      flex-direction: row;
      height: auto;
      margin: 0 auto;
   }

`

const StyledLinkItem = styled.li`
  list-style-type: none;

  a {
    display: block;
    text-decoration: none;
    padding: .5rem 1rem .5rem 1.3rem;
    color: ${({ theme }) => theme.colors.mainGrey};
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;

    transition: ${({ theme }) => theme.transitions.smooth};

     @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
       transform: translateX(0);
       padding: .5rem 1rem .5rem 1rem;
       font-size: .8rem;
   }

    &:hover {
      color: ${({ theme }) => theme.colors.mainYellow};
      transform: translateX(5px);
  
     @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
       transform: translateX(0);
      }
    }

  }
`