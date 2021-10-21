import React, {useRef, useEffect} from "react"
import CognizantImage from '../images/solutions/cognizant.jpg'
import EcommerceImage from '../images/solutions/ecommerce.jpg'
import PayImage from '../images/solutions/pay.jpg'
import PulseImage from '../images/solutions/pulse.jpg'
import SmileyImage from '../images/solutions/smiley.jpg'

const HomeSolutions = () => {
    return (
        <section data-scrollax-parent="true" id="solutions">
            <div className="section-subtitle" data-scrollax="properties: { translateY: '-250px' }" >Solutions by PragICTS <span>//</span></div>
            <div className="container">
                <div className="section-title fl-wrap">
                    <h3>Software solutions by us</h3>
                    <h2>Software <span> Solutions</span></h2>
                    <p>
                    Software solutions by PragICTS are engineered for productivity, usability, access interoperability (any device), deployment neutral (on-premise and cloud configurations), extensibility, and effective operations across Internet-enabled devices.
                    </p>
                </div>
                <div className="custom-inner-holder  mar-bottom">
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header cognizant" data-scrollax="properties: { translateY: '150px' }">
                                    <i className="fal pragicts-cognizant-icon"></i>
                                    <h3>HR / HCM Solution</h3>
                                </div>
                                <div className="ci-num"><span>01. - </span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="custom-inner-content fl-wrap" data-scrollax="properties: { translateY: '200px' }">
                                    <h4>Cognizant</h4>
                                    <p>Software solutions by PragICTS are engineered for productivity, usability, access interoperability (any device), deployment neutral (on-premise and cloud configurations), extensibility, and effective operations across Internet-enabled devices.</p>
                                    <a href="#" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img src={CognizantImage} className="respimg" data-scrollax="properties: { translateY: '270px' }" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header ecommerce" data-scrollax="properties: { translateY: '150px' }">
                                    <i className="fal pragicts-ecommerce-icon"></i>
                                    <h3>Online Business</h3>
                                </div>
                                <div className="ci-num"><span>02. - </span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="custom-inner-content fl-wrap" data-scrollax="properties: { translateY: '200px' }">
                                    <h4>Ecommerce</h4>
                                    <p>Tier-1 eCommerce implementation for online shopping.</p>
                                    <a href="#" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img src={EcommerceImage} className="respimg" data-scrollax="properties: { translateY: '270px' }" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header pay" data-scrollax="properties: { translateY: '150px' }">
                                    <i className="fal pragicts-pay-icon"></i>
                                    <h3>Online Invoicing & Billing</h3>
                                </div>
                                <div className="ci-num"><span>03. - </span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="custom-inner-content fl-wrap" data-scrollax="properties: { translateY: '200px' }">
                                    <h4>Pay</h4>
                                    <p>Online invoicing and payment platform. Integration with any payment Gateway.</p>
                                    <a href="#" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img src={PayImage} className="respimg" data-scrollax="properties: { translateY: '270px' }" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header pulse" data-scrollax="properties: { translateY: '150px' }">
                                    <i className="fal pragicts-pulse-icon"></i>
                                    <h3>Feedback / Survey</h3>
                                </div>
                                <div className="ci-num"><span>04. - </span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="custom-inner-content fl-wrap" data-scrollax="properties: { translateY: '200px' }">
                                    <h4>Pulse</h4>
                                    <p>Online comprehensive customer feedback platform.</p>
                                    <a href="#" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img src={PulseImage} className="respimg" data-scrollax="properties: { translateY: '270px' }" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header smiley" data-scrollax="properties: { translateY: '150px' }">
                                    <i className="fal pragicts-smiley-icon"></i>
                                    <h3>Customer Sentiment Management</h3>
                                </div>
                                <div className="ci-num"><span>05. - </span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="custom-inner-content fl-wrap" data-scrollax="properties: { translateY: '200px' }">
                                    <h4>Smiley</h4>
                                    <p>Online comprehensive customer sentiment management platform.</p>
                                    <a href="#" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img src={SmileyImage} className="respimg" data-scrollax="properties: { translateY: '270px' }" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-lines"></div>
        </section>
    )
}

export default HomeSolutions
