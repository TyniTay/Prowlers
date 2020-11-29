import React from 'react'
import './Resources.css'

const Resources = props => {
return (
<html>

<head>
    <title>Resources</title>
</head>

<body>
<div className="container">
    <section className="astyle + blue">
    <div className="column">
        <h2 className="atitle">Student Account Center</h2>
        <p className="atext">Manage tuiton balances and payment plan options.</p>
    </div>
     <a href="https://lmutpg.lmu.edu/C20995_tsa/web/login.jsp" target="_blank"> 
        <button className="viewButton"> View </button>
    </a>
    </section>

    <section className="astyle + purple">
    <div className="column">
        <h2 className="atitle">Degree Works</h2>
        <p className="atext">Check your Degree Audit and check your gradutation status.</p>
    </div>
     <a href="https://auth.lmu.edu/mysso/redirect/dw.jsp" target="_blank"> 
        <button className="viewButton"> View </button>
    </a>
    </section>

    <section className="astyle + green">
    <div className="column">
        <h2 className="atitle">Brightspace</h2>
        <p className="atext">Keep up with updates for current courses exams, grades, homework, and more.</p>
    </div>
    <a href="https://brightspace.lmu.edu/d2l/login" target="_blank"> 
        <button className="viewButton"> View </button>
    </a>
    </section>

    <section className="astyle + orange">
    <div className="column">
        <h2 className="atitle">LibGuides</h2>
        <p className="atext">Full list of Databases accessible through the library.</p>
    </div>
    <a href="http://libguides.lmu.edu/" target="_blank"> 
        <button className="viewButton"> View </button>
    </a>
    </section>

    <section className="astyle + teal">
    <div className="column">
        <h2 className="atitle">LMU Park Account</h2>
        <p className="atext">Update your parking information or pay parking fines.</p>
    </div>
    <a href="https://auth.lmu.edu/cas/login?service=https://lmu.t2hosted.com/cmn/auth.aspx" target="_blank"> 
        <button className="viewButton"> View </button>
    </a>
    </section>

    <section className="astyle + red">
    <div className="column">
        <h2 className="atitle"> DSS Online Portal </h2>
        <p className="atext">Apply or manage your accommodations.</p>
    </div>
    <a href="https://andes.accessiblelearning.com/LMU/" target="_blank"> 
        <button className="viewButton"> View </button>
    </a>
    </section>
    
</div>

</body>
</html>
)
}
export default Resources