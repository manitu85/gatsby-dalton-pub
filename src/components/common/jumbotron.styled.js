import styled from 'styled-components'
import React from 'react'
import img from 'images/hero/about.jpg'

const HomeJumbotron = ({ img, children }) => <Header img={img}>{children}</Header>

const PageJumbotron = ({ img, children }) => <DefaultHeader img={img}>{children}</DefaultHeader>

// Header
const Header = styled.header`
  /* min-height: calc(100vh - 68px); */
  min-height: 100vh;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${props => props.img}) center/cover fixed no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 4rem;
`
// Reusable extended styles default
const DefaultHeader = styled(Header)`
  min-height: 60vh;
`

HomeJumbotron.defaultProps = { img }

PageJumbotron.defaultProps = { img }

export { HomeJumbotron, PageJumbotron }
