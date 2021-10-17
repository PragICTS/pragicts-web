import React from "react"
import HeroSlides from "../components/hero-slides"
import Layout from "../components/layout"
import HomeStats from "../components/home-stats"
import HomeSolutions from "../components/home-solutions"
import HomeAbout from "../components/home-about"

// markup
const IndexPage = () => {

    return (
        <Layout
            pageTitle="Software Development Company in Sri Lanka"
        >
            <div id="wrapper">
                <div className="scroll-nav-wrap fl-wrap">
                    <div className="scroll-down-wrap">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                        <span>Scroll Down</span>
                    </div>
                    <nav className="scroll-nav scroll-init">
                        <ul>
                            <li><a className="scroll-link act-link" href="#sec1">Hero</a></li>
                            <li><a className="scroll-link" href="#sec2">About</a></li>
                            <li><a className="scroll-link" href="#sec3">Resume</a></li>
                            <li><a className="scroll-link" href="#sec4">Skills</a></li>
                            <li><a className="scroll-link" href="#sec5">Projects</a></li>
                            <li><a className="scroll-link" href="#sec6">Clients</a></li>
                        </ul>
                    </nav>
                </div>

                <HeroSlides />

                <div className="content">

                    {/* overview section */}
                    <HomeAbout />

                    {/* numbers section */}
                    <HomeStats />

                    {/* solutions  */}
                    <HomeSolutions />
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
