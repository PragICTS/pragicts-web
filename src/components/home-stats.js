import React, {useState, useRef, useEffect} from 'react'
import NumbersBgImage from '../images/bg/6.jpg'
import { InView } from 'react-intersection-observer'

const currentCount = {
    countOfProjectsCompleted: 15,
    countOfHappyCustomers: 20,
    countOfYearsInBusiness: 50,
    countOfWorkingHours: 100,
}

const HomeStats = () => {
    const [ state, setState ] = useState({
        viewed: false
    })
    const countOfProjectsCompletedRef = useRef(null)
    const countOfHappyCustomersRef = useRef(null)
    const countOfYearsInBusinessRef = useRef(null)
    const countOfWorkingHoursRef = useRef(null)
    const bgRef = useRef(null)

    const countUp = (el, countTo, count) => {
        el.current.innerHTML = count
        if(count < countTo) {
            setTimeout(() => countUp(el, countTo, count + 1), 60)
        }
    }

    const loadCounts = (inView, entry) => {
        if(inView && !state.viewed) {
            setState({
                viewed: true
            })

            countUp(countOfProjectsCompletedRef, currentCount.countOfProjectsCompleted, 0)
            countUp(countOfHappyCustomersRef, currentCount.countOfHappyCustomers, 0)
            countUp(countOfYearsInBusinessRef, currentCount.countOfYearsInBusiness, 0)
            countUp(countOfWorkingHoursRef, currentCount.countOfWorkingHours, 0)
        }
    }

    useEffect(() => {
        bgRef.current.style.backgroundImage = "url(" + bgRef.current.dataset.bg + ")"
    }, [])

    return (
        <InView as="section" onChange={loadCounts} className="parallax-section dark-bg sec-half parallax-sec-half-right" data-scrollax-parent="true">
            <div ref={bgRef} className="bg home-sec-bg par-elem"  data-bg={NumbersBgImage} data-scrollax="properties: { translateY: '30%' }"></div>
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
                                    <div className="num" ref={countOfYearsInBusinessRef}>0</div>
                                </div>
                            </div>
                            <h6>Years in Business</h6>
                        </div>
                    </div>
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" ref={countOfHappyCustomersRef}>0</div>
                                </div>
                            </div>
                            <h6>Happy Customers</h6>
                        </div>
                    </div>
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" ref={countOfProjectsCompletedRef}>0</div>
                                </div>
                            </div>
                            <h6>Completed Projects</h6>
                        </div>
                    </div>
                    <div className="inline-facts-wrap">
                        <div className="inline-facts">
                            <div className="milestone-counter">
                                <div className="stats animaper">
                                    <div className="num" ref={countOfWorkingHoursRef}>0</div>
                                </div>
                            </div>
                            <h6>Working Hours</h6>
                        </div>
                    </div>
                </div>
            </div>
        </InView>
    )
}

export default HomeStats
