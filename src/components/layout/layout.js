import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from './navbar'
import Footer from './footer/footer'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/common/global.styled'
import { theme } from 'components/common/theme/theme'
import 'sass/fonts.scss'


const Layout = ({ children }) => {

  const data = useStaticQuery(SITE_METADATA)
  const { title } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar title={title || `Title`} />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}


export const SITE_METADATA = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout