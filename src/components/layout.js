import React from "react"
// import Header from "./header"

import GlobalStyles from './common/global.styled'
import 'sass/layout.scss'


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      {children}
    </React.Fragment>
  )
}


export default Layout
