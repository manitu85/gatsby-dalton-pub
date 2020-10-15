import React from 'react'

import Navbar from './navbar'
import Footer from './footer/footer'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/common/global.styled'
import { theme } from 'components/common/theme/theme'
import 'sass/fonts.scss'



const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}


export default Layout

// const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }