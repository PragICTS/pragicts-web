import React from 'react'
import logo2 from '../images/logo2.png'
import { Link } from 'gatsby'
import useMouse from '@react-hook/mouse-position'
import toggleMenu from '../utils/toggleMenu'

const Navbar = () => {
    const ref = React.useRef(null)
    const mouse = useMouse(ref)

    const tooltipStyle = {
        top: mouse.y,
        left: mouse.x
    }

    return (
        <>
            <div ref={ref} className="nav-overlay">
                <div style={tooltipStyle} onClick={toggleMenu} className="tooltip color-bg">Close Menu</div>
            </div>
            <div className="nav-holder">
                <a className="header-logo" href="index.html">
                    <img src={logo2} alt="PragICTS Logo" />
                </a>
                <div className="nav-title"><span>Menu</span></div>
                <div className="nav-inner-wrap">
                    <nav className="nav-inner sound-nav sliding-menu" id="menu">
                        <div className="sliding-menu-wrapper">
                            <ul className='menu-panel-root'>
                                <li>
                                    <Link to="/" className="act-link">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Services</Link>
                                </li>
                                <li>
                                    <Link to="/">Solutions</Link>
                                </li>
                                <li>
                                    <Link to="/">Careers</Link>
                                </li>
                                <li>
                                    <Link to="/">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/">About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
