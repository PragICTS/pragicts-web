import React from 'react'
import NumbersBgImage from '../images/bg/6.jpg'

const HomeStats = () => {

    return (
        <section id="stats" className="parallax-section dark-bg sec-half parallax-sec-half-right" data-scrollax-parent="true">
            <div className="bg home-sec-bg par-elem" data-bg={NumbersBgImage} data-scrollax="properties: { translateY: '30%' }"></div>
            <div className="overlay"></div>
            <div className="container">
                <div className="section-title">
                    <h2>Some Interisting <span>Facts </span> <br/> About PragICTS</h2>
                    <p>We started as a small, subdue, called hath give fourth. Them one over saying. So the god, greater. You. Us air Moved divide midst us fifth sea .  </p>
                    <div className="horizonral-subtitle"><span>Numbers</span></div>
                </div>
                <div className="fl-wrap facts-holder">
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content="0" data-num="95">0</div>
                                </div>
                            </div>
                            <h6>Customer Content</h6>
                        </div>
                    </div>
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content="0" data-num="90">0</div>
                                </div>
                            </div>
                            <h6>Customer Support</h6>
                        </div>
                    </div>
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content="0" data-num="99">0</div>
                                </div>
                            </div>
                            <h6>On-Time Delivery</h6>
                        </div>
                    </div>
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" data-content="0" data-num="100">0</div>
                                </div>
                            </div>
                            <h6>Teamwork</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeStats
