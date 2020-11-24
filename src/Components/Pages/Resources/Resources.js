import React from 'react'
import './Resources.css'

const Resources = props => {
    return(
        <div className = "resources">
            <a className = "resource" 
                style={{ background: '#edc7c7' }}
                href="https://bannerxe.lmu.edu/StudentRegistrationSsb/ssb/registration" 
                target="_blank">register for classes
            </a>
            <a className = "resource" 
                style={{ background: '#c7d9ed' }}
                href="https://lmutpg.lmu.edu/C20995_tsa/web/welcome.jsp" 
                target="_blank">student account center
            </a> 
            {/* The one below is just a placeholder until we get more stuff */}
            <a className = "resource" 
                href="https://www.youtube.com/watch?v=RVdZs8Vh0O0" 
                target="_blank">furret walking
            </a> 
        </div>
    )
}

export default Resources