import React, {useEffect, useRef} from "react"
import HeroSlides from "../components/hero-slides"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import HomeStats from "../components/home-stats"
import HomeSolutions from "../components/home-solutions"
import fitText from "../utils/fitText"

// markup
const IndexPage = () => {
    const subTitle = useRef(null)

    useEffect(() => {
        if(subTitle) {
            fitText(subTitle.current, 1.15)
        }

        let a = document.querySelectorAll(".home-sec-bg")

        a.forEach(function (a) {
            if(a.dataset.bg) {
                a.style.backgroundImage = "url(" + a.dataset.bg + ")"
            }
        })
    }, [])

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
                    <section data-scrollax-parent="true" id="sec2">
                        <div ref={subTitle} className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" > <span>//</span>About PragICTS</div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="collage-image fl-wrap">
                                        <div className="collage-image-title" data-scrollax="properties: { translateY: '150px' }">PragICTS.</div>
                                        <StaticImage src="../images/home/about-section-img.jpg" className="respimg gatsby-img" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="main-about fl-wrap">
                                        <h5>Software | Infrastructure | Cloud</h5>
                                        <h2>Innovative solutions to<br /> <span> Expedite </span>  your business</h2>
                                        <p>Convergence to digital creates fresh possibilities to bring about transformational change for leapfrogging business outcomes. The new norm! PragICTS is an accomplished IT services company in Sri Lanka.</p>
                                        <p>We specialize in delivering bespoke IT services to the Small to Medium Business (SMB) segment. Our services include software development, provisioning, and management of IT infrastructure and cloud platforms.</p>
                                        <p>We have had our share of aches, pains, and struggles along the way to get to where we are today. Our impeccable service record is a testament to our constant capacity to engineer, deliver, support, and delight our clients.</p>
                                        <p>Talk to us and experience the difference we can make together.</p>
                                        <div className="features-box-container fl-wrap">
                                            <div className="row">
                                                <div className="features-box col-md-6">
                                                    <div className="time-line-icon">
                                                        <i className="fal pragicts-software-icon"></i>
                                                    </div>
                                                    <h3>Software</h3>
                                                    <p>Software development and support services. Web (including websites), Mobile and Rich Client Applications.</p>
                                                </div>
                                                <div className="features-box col-md-6">
                                                    <div className="time-line-icon">
                                                        <i className="fal pragicts-infrastructure-icon"></i>
                                                    </div>
                                                    <h3>Infrastructure</h3>
                                                    <p>Implementation, management, and support of ICT Infrastructure.  On-site, remote, hybrid, and on-call service models.</p>
                                                </div>
                                                <div className="features-box col-md-6">
                                                    <div className="time-line-icon">
                                                        <i className="fab pragicts-cloud-icon"></i>
                                                    </div>
                                                    <h3>Cloud</h3>
                                                    <p>Provisioning, management, and support of cloud platforms. Amazon, Microsoft, Google, and other third parties.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <a href="portfolio.html" className="btn float-btn flat-btn color-btn">My Portfolio</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-parallax-module" data-position-top="90"  data-position-left="25" data-scrollax="properties: { translateY: '-250px' }"></div>
                        <div className="bg-parallax-module" data-position-top="70"  data-position-left="70" data-scrollax="properties: { translateY: '150px' }"></div>
                        <div className="sec-lines">
                            <div className="container full-height"><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div></div>
                        </div>
                    </section>

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
