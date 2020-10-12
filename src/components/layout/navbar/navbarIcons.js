import React, { useState } from 'react'
import styled from 'styled-components'
import { FaFacebookMessenger, FaInstagram, FaTwitter } from 'react-icons/fa'

const NavbarIcons = () => {

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
    <StyledIconsWrapper>
      { socialIcons}
    </StyledIconsWrapper>
  )
}

export default NavbarIcons


const StyledIconsWrapper = styled.div`

  .icon {
    margin-right: 2rem;
    font-size: 1.25rem;
    transition: ${({ theme }) => theme.transitions.smooth};
    color: ${({ theme }) => theme.colors.mainWhite};
    cursor: pointer;
  }

  .facebook-icon:hover {
    color: #3b579d;
  }
  .twitter-icon :hover{
    color: #3ab7f0;
  }
  .instagram-icon:hover {
    color: #da5f53;
  }

  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet} ) {
    width: 5rem;
    display: flex;
    justify-content: space-around;
  }
  
`;




/* a {
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.mainWhite};
  margin-right: 5px;
}



.facebook,
.twitter,
.instagram {
  transition: ${({ theme }) => theme.transitions.smooth};
  cursor: pointer;

 &:hover {
  color: ${({ theme }) => theme.colors.mainYellow};
 }
} */