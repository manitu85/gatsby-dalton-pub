import React from 'react'
import Navbar from './navbar'

import GlobalStyles from 'components/common/global.styled'
import 'sass/layout.scss'


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <GlobalStyles />
      {children}
    </React.Fragment>
  )
}


export default Layout
