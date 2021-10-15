import React, { useEffect } from 'react'

const Loader = () => {
    useEffect(() => {
        let loaderWrapEl = document.querySelector('.loader-wrap')
        let mainEl = document.querySelector('#main')
        setTimeout(() => {
            if(loaderWrapEl && mainEl) {
                loaderWrapEl.style.opacity = '0'
                mainEl.style.opacity = '1'
            }
            loaderWrapEl.style.display = 'none'
        }, 300);
    }, [])

    return (
        <div className="loader-wrap">
            <div className="pin"></div>
        </div>
    )
}

export default Loader
