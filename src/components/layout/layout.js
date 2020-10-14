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
        <Navbar />
        <GlobalStyles />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}


export default Layout
