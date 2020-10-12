import React from 'react'
import Navbar from './navbar'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'components/common/global.styled'
import { theme } from 'components/common/theme'
import 'sass/layout.scss'


const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar />
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  )
}


export default Layout
