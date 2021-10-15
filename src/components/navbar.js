import * as React from 'react'
import logo2 from '../images/logo2.png'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <>
            <div className="nav-overlay">
                <div className="tooltip color-bg">Close Menu</div>
            </div>
            <div className="nav-holder">
                <a className="header-logo" href="index.html">
                    <img src={logo2} alt="PragICTS Logo" />
                </a>
                <div className="nav-title"><span>Menu</span></div>
                <div className="nav-inner-wrap">
                    <nav className="nav-inner sound-nav" id="menu">
                        <ul>
                            <li>
                                <Link to="/" className="act-link">Home</Link>
                                <ul>
                                    <li><a href="index.html">Half Slider</a></li>
                                    <li><a href="index2.html">Half Image</a></li>
                                    <li><a href="index3.html">Impulse Image</a></li>
                                    <li><a href="index4.html">Fullscreen  Image</a></li>
                                    <li><a href="index5.html" className="act-link">Fullscreen  Slider</a></li>
                                    <li><a href="index6.html">Slideshow</a></li>
                                    <li><a href="index7.html">Fullscreen Carousel</a></li>
                                    <li><a href="index8.html">Video</a></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/">Portfolio</Link>
                                <ul>
                                    <li><a href="portfolio.html">Masonry</a></li>
                                    <li><a href="portfolio2.html">Masonry 2</a></li>
                                    <li><a href="portfolio3.html">Boxed</a></li>
                                    <li><a href="portfolio4.html">Boxed 2 </a></li>
                                    <li><a href="portfolio5.html">Parallax</a></li>
                                    <li><a href="portfolio6.html">Parallax dark</a></li>
                                    <li><a href="portfolio8.html">List</a></li>
                                    <li>
                                        <Link to="/">Single</Link>
                                        <ul>
                                            <li><a href="portfolio-single.html">Carousel</a></li>
                                            <li><a href="portfolio-single2.html">Carousel 2</a></li>
                                            <li><a href="portfolio-single3.html">Gallery</a></li>
                                            <li><a href="portfolio-single4.html">Gallery 2</a></li>
                                            <li><a href="portfolio-single5.html">Slider</a></li>
                                            <li><a href="portfolio-single6.html">Showcase</a></li>
                                            <li><a href="portfolio-single7.html">Fullscreen  Slider</a></li>
                                            <li><a href="portfolio-single8.html">Video</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li>
                                <Link to="/">Pages</Link>
                                <ul>
                                    <li><a href="services2.html">Services 2</a></li>
                                    <li><a href="blog-single.html">Blog single</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="team-single.html">Team Single</a></li>
                                    <li><a href="coming-soon.html">Coming soon</a></li>
                                    <li><a href="404.html">404</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
