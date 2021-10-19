import React, { useEffect, useRef } from "react"

const Footer = () => {
    const particlesRef = useRef(null)

    return (
        <footer className="main-footer fixed-footer">
            <div className="footer-inner fl-wrap">
                <div className="container">
                    <div ref={particlesRef} className="partcile-dec" data-parcount="90"></div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="footer-title fl-wrap">
                                <span>PragICTS</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-header fl-wrap"><span>01.</span> Email Us</div>

                            <form  className="custom-form footer-form" action="#" name="contactform" id="contactform">
                                <fieldset>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label><i className="fal fa-user"></i></label>
                                            <input className="footer-input" type="text" name="name" id="name" placeholder="Your Name *"/>
                                        </div>
                                        <div className="col-md-12">
                                            <label><i className="fal fa-envelope"></i> </label>
                                            <input className="footer-input" type="text"  name="email" id="email" placeholder="Email Address *"/>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className="footer-input" name="comments"  id="comments" cols="40" rows="3" placeholder="Your Message:"></textarea>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <button className="btn float-btn flat-btn color-btn" id="submit">Send Message</button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-header footer-header-contacts fl-wrap"><span>02.</span>Quick Links</div>
                            <div className="footer-box fl-wrap">
                                <div className="footer-contacts fl-wrap">
                                    <p>Services</p>
                                    <ul>
                                        <li><i className="fal fa-arrow-right"></i><a href="#">Software</a></li>
                                        <li><i className="fal fa-arrow-right"></i><a href="#">Infrastructure</a></li>
                                        <li><i className="fal fa-arrow-right"></i><a href="#">Cloud</a></li>
                                    </ul>
                                </div>
                                <div className="footer-contacts fl-wrap">
                                    <p>Solutions</p>
                                    <ul>
                                        <li><i className="fal fa-arrow-right"></i><a href="#">Cognizant</a></li>
                                        <li><i className="fal fa-arrow-right"></i><a href="#">Ecommerce</a></li>
                                        <li><i className="fal fa-arrow-right"></i><a href="#">Pay</a></li>
                                        <li><i className="fal fa-arrow-right"></i><a href="#">Pulse</a></li>
                                        <li><i className="fal fa-arrow-right"></i><a href="#">Smiley</a></li>
                                        <li><i className="fal fa-arrow-right"></i><a href="#">Vault</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-header footer-header-contacts fl-wrap"><span>03.</span> Contact Us</div>
                            <div className="footer-box fl-wrap">
                                <div className="footer-contacts fl-wrap">
                                    <p>General / Marketing</p>
                                    <ul>
                                        <li><i className="fal fa-phone"></i><span>Phone :</span><a href="tel:0094114848284">+94 11 484 8284</a></li>
                                        <li><i className="fal fa-envelope"></i><span>Email :</span><a href="mailto:info@pragicts.com">info@pragicts.com</a></li>
                                    </ul>
                                </div>
                                <div className="footer-contacts fl-wrap">
                                    <p>Support</p>
                                    <ul>
                                        <li><i className="fal fa-phone"></i><span>Phone :</span><a href="tel:0094114848288">+94 11 484 8288</a></li>
                                        <li><i className="fal fa-envelope"></i><span>Email :</span><a href="mailto:support@pragicts.com">support@pragicts.com</a></li>
                                    </ul>
                                </div>
                                <div className="footer-contacts fl-wrap">
                                    <p>Escalations</p>
                                    <ul>
                                        <li><i className="fal fa-phone"></i><span>Phone :</span><a href="tel:0094704598983">+94 70 459 8983</a></li>
                                        <li><i className="fal fa-envelope"></i><span>Email :</span><a href="mailto:escalations@pragicts.com">escalations@pragicts.com</a></li>
                                    </ul>
                                </div>
                                <div className="footer-socilal fl-wrap">
                                    <ul >
                                        <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-vk"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter fl-wrap">
                <div className="container">
                    <div className="policy-box">
                        <span>&#169; PragICTS 2021  |  All rights reserved. </span>
                    </div>
                    <a href="#" className="to-top color-bg"><i className="fal fa-angle-up"></i><span></span></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
