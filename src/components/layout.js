import * as React from 'react'
import '../css/reset.css'
import '../css/plugins.css'
import '../css/style.css'
import '../css/color.css'
import Loader from './loader'
import Header from './header'
import Navbar from './navbar'

const Layout = ({pageTitle, children}) => {
    return (
        <>
            <title>{pageTitle}</title>
            <Loader />
            <div id="main">
                <Header />
                <Navbar />
                {children}
            </div>
        </>
    )
}

export default Layout
