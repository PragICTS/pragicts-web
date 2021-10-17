import React, {useRef, useEffect} from "react"
import fitText from "../utils/fitText"

const HomeSolutions = () => {
    const subTitle = useRef(null)

    useEffect(() => {
        if(subTitle) {
            fitText(subTitle.current, 1.5)
        }
    }, [])

    return (
        <section data-scrollax-parent="true" id="sec3">
            <div className="section-subtitle" ref={subTitle}  data-scrollax="properties: { translateY: '-250px' }" >Solutions by PragICTS <span>//</span></div>
            <div className="container">
                <div className="section-title fl-wrap">
                    <h3>Some Words About Me</h3>
                    <h2>My Awesome <span> Story</span></h2>
                    <p>
                        We started as a small, subdue, called hath give fourth. Them one over saying. So the god, greater. You. Us air Moved divide midst us fifth sea .
                    </p>
                </div>
                <div className="custom-inner-holder  mar-bottom">
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header workres">
                                    <i className="fa fa-briefcase"></i>
                                    <h3> Work in company "Dolore"</h3>
                                    <span>  2012-2017 </span>
                                </div>
                                <div className="ci-num"><span>01. -</span></div>
                            </div>
                            <div className="col-md-4"><img src="images/all/4.jpg" className="respimg" data-scrollax="properties: { translateY: '-170px' }" alt="" /></div>
                            <div className="col-md-4">
                                <div className="custom-inner-content fl-wrap">
                                    <h4>Complete the project "domik"</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                    <ul>
                                        <li>Door portals plan</li>
                                        <li>Furniture specifications</li>
                                        <li>Interior design</li>
                                    </ul>
                                    <a href="#" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header educ">
                                    <i className="fal fa-university"></i>
                                    <h3> Course designer - San Diego</h3>
                                    <span>  2011-2013 </span>
                                </div>
                                <div className="ci-num"><span>02. - </span></div>
                            </div>
                            <div className="col-md-5">
                                <div className="custom-inner-content fl-wrap">
                                    <h4>Passage of Lorem Ipsum</h4>
                                    <p>We started as a small, subdue, called hath give fourth. Them one over saying. So the god, greater. You. Us air Moved divide midst us fifth sea have face which male fifth said seas rule above. Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <a href="#" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                            <div className="col-md-3"><img src="images/all/8.jpg" className="respimg" data-scrollax="properties: { translateY: '270px' }" alt="" /></div>
                        </div>
                    </div>
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header workres">
                                    <i className="fa fa-briefcase"></i>
                                    <h3> Work in company "Generators"</h3>
                                    <span>  2010-2013 </span>
                                </div>
                                <div className="ci-num"><span>03. - </span></div>
                            </div>
                            <div className="col-md-8">
                                <div className="custom-inner-content fl-wrap">
                                    <h4>Making this the first</h4>
                                    <p>We started as a small, subdue, called hath give fourth. Them one over saying. So the god, greater. You. Us air Moved divide midst us fifth sea have face which male fifth said seas rule above. All the Lorem Ipsum generators on the Internet tend .</p>
                                    <ul>
                                        <li>Door portals plan</li>
                                        <li>Furniture specifications</li>
                                        <li>Interior design</li>
                                    </ul>
                                    <p> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="custom-inner-header workres">
                                    <i className="fa fa-briefcase"></i>
                                    <h3> Work in company "Available"</h3>
                                    <span>  2011-2013 </span>
                                </div>
                                <div className="ci-num"><span>04. - </span></div>
                            </div>
                            <div className="col-md-4"><img src="images/all/6.jpg" className="respimg" data-scrollax="properties: { translateY: '100px' }" alt="" /></div>
                            <div className="col-md-4">
                                <div className="custom-inner-content fl-wrap">
                                    <h4>Complete the project "domik"</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                    <ul>
                                        <li>Door portals plan</li>
                                        <li>Furniture specifications</li>
                                        <li>Interior design</li>
                                    </ul>
                                    <a href="#" className="cus-inner-head-link color-bg">Details + </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec-lines">
                <div className="container full-height"><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div><div className="line-item"></div></div>
            </div>
        </section>
    )
}

export default HomeSolutions
