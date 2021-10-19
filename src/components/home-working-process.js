import React, {useEffect, useRef} from "react"
import fitText from "../utils/fitText"

const HomeWorkingProcess = () => {
    const subTitle = useRef(null)

    useEffect(() => {
        if(subTitle) {
            fitText(subTitle.current, 1.15)
        }
    }, [])

    return (
        <section  data-scrollax-parent="true">
            <div ref={subTitle} className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }"><span>//</span>How We Engage</div>
            <div className="container">
                <div className="section-title fl-wrap">
                    <h3>How We Engage</h3>
                    <h2>Our   Engaging   <span>Process</span></h2>
                    <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.  </p>
                </div>
                <div className="process-wrap fl-wrap">
                    <ul>
                        <li>
                            <div className="time-line-icon">
                                <i className="fab fa-slideshare"></i>
                            </div>
                            <h4>Discuss the project</h4>
                            <div className="process-details">
                                <h6>Duis autem vel eum iriure dolor</h6>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.</p>
                                {/* <a href="#">More Details</a> */}
                            </div>
                            <span className="process-numder">01.</span>
                        </li>
                        <li>
                            <div className="time-line-icon">
                                <i className="fal fa-laptop"></i>
                            </div>
                            <h4>Develop & elaborate</h4>
                            <div className="process-details">
                                <h6>In ut odio libero, at vulputate urna. </h6>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.</p>
                                {/* <a href="#">More Details</a> */}
                            </div>
                            <span className="process-numder">02.</span>
                        </li>
                        <li>
                            <div className="time-line-icon">
                                <i className="fal fa-flag-checkered"></i>
                            </div>
                            <h4>Final approvement</h4>
                            <div className="process-details">
                                <h6>Nulla posuere sapien vitae lectus suscipit</h6>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.</p>
                                {/* <a href="#">More Details</a> */}
                            </div>
                            <span className="process-numder">03.</span>
                        </li>
                    </ul>
                </div>
                {/* <div className="fl-wrap mar-top">
                    <div className="srv-link-text">
                        <h4>Need more info ? Visit my services page :  </h4>
                        <a href="services.html" className="btn float-btn flat-btn color-btn">My Services</a>
                    </div>
                </div> */}
            </div>
            <div className="bg-parallax-module" data-position-top="90"  data-position-left="30" data-scrollax="properties: { translateY: '-150px' }"></div>
            <div className="bg-parallax-module" data-position-top="80"  data-position-left="80" data-scrollax="properties: { translateY: '350px' }"></div>
            <div className="sec-lines">
                <div className="container full-height"><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div></div>
            </div>
        </section>
    )
}

export default HomeWorkingProcess
