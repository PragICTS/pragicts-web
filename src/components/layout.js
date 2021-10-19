import React, { useEffect } from 'react'
import '../css/reset.css'
import '../css/plugins.css'
import '../css/style.css'
import '../css/color.css'
import Loader from './loader'
import Header from './header'
import Navbar from './navbar'
import { Helmet } from 'react-helmet'

const Layout = ({pageTitle, children}) => {
    useEffect(() => {
        const heightEmulatorEl = document.querySelector('.height-emulator')
        const fixedFooterEl = document.querySelector('.fixed-footer')

        heightEmulatorEl.style.height = `${fixedFooterEl.offsetHeight}px`
    }, [])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageTitle}</title>
                <link rel="canonical" href="https://pragicts.com" />
            </Helmet>
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
