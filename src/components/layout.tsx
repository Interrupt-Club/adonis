import * as React from "react"
import { PageProps } from "gatsby"
import ContentArea from './contentArea'
import Header from './header'
import Footer from "./footer"
import Newsletter from "./newsletter"

const Layout: React.FC<PageProps<Queries.NotFoundPageQuery>> = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  // let header

  return (
    <div className="content-area">
      <Header/>
      <ContentArea>{children}</ContentArea>
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default Layout
