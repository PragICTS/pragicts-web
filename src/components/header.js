import * as React from 'react'
import logo from '../images/logo.png'
import { Link } from 'gatsby'
import toggleMenu from '../utils/toggleMenu'

const Header = () => {
    return (
        <header className="main-header">
            <Link className="logo-holder" to="/">
                <img src={logo}  alt="PragICTS logo" />
            </Link>
            <div className="nav-button but-hol" onClick={toggleMenu}>
                <span  className="nos"></span>
                <span className="ncs"></span>
                <span className="nbs"></span>
                <div className="menu-button-text">Menu</div>
            </div>
            <div className="header-social">
                <ul >
                    <li><a rel="noreferrer noopener" href="https://facebook.com" target="_blank"><i aria-label='Facebook' className="fab fa-facebook-f"></i></a></li>
                    <li><a rel="noreferrer noopener" href="https://instagram.com" target="_blank"><i aria-label='Instagram' className="fab fa-instagram"></i></a></li>
                    <li><a rel="noreferrer noopener" href="https://twitter.com" target="_blank"><i aria-label='Twitter' className="fab fa-twitter"></i></a></li>
                    <li><a rel="noreferrer noopener" href="https://vk.com" target="_blank"><i aria-label='VK' className="fab fa-vk"></i></a></li>
                </ul>
            </div>
            <div className="show-share showshare">
                <i className="fal fa-retweet"></i>
                <span>Share This</span>
            </div>
        </header>
    )
}

export default Header
