import React from 'react'
import './Dashboard.css'
import { getUsername } from "../../../Data";

const Dashboard = () => {
return (
<div>
<title>Dashboard</title>
<div>
    {/* Title of the page w/ welcome message to getUsername
    * Time and date at the right hand corner */}
    <div className="welcomeMessage">
        <h1> {"Welcome, " + getUsername() + "."} </h1>
        </div>
        <div className="dateTime">
            12:00PM, Tuesday, December 1, 2020
        </div>

        {/* Updates Section
        * ------------------------------------------------------*/}
        <div className="recentUpdates">
            <h4 className="heading"> Recent Updates </h4>
            <section className="card">
                <p> Registration date for Spring 2021 has been updated. </p>
            </section>

            <section className="card">
                <p> Your Reports have been updated for Fall 2020. </p>
            </section>
        </div>
        {/* Courses Block Section
        * ------------------------------------------------------*/}
        <div className="coursePreview">
            <h4 className="heading"> Courses </h4>
            <section className="cardL + blue">
                <h6 className="courseTitle"> First-Year Seminar </h6>
                <a> Preparing For Mars </a>
                <a className="time"> 1:30PM </a>
                <a className="days"> T T </a>
                <p className="subtext"> 4 Credits </p>
            </section>

            <section className="cardL + orange">
                <h6 className="courseTitle"> Theological Inquiry </h6>
                <a> Jesus, God, and The Holy Spirit </a>
                <a className="time"> 4:00PM </a>
                <a className="days"> M W F </a>
                <p className="subtext"> 4 Credits </p>
            </section>

            <section className="cardL + purple">
                <h6 className="courseTitle"> Economics </h6>
                <a> Introduction to Economics </a>
                <a className="time"> 11:30AM </a>
                <a className="days"> M W F </a>
                <p className="subtext"> 4 Credits </p>
            </section>

            <section className="cardL + green">
                <h6 className="courseTitle"> Mathematics </h6>
                <a> Business Calculus I</a>
                <a className="time"> 10:00AM </a>
                <a className="days"> T T </a>
                <p className="subtext"> 4 Credits </p>
            </section>
        </div>

        {/* Resources Panels
   * ------------------------------------------------------*/}
   <div className="resourceSection">
       <h4 className="heading"> Resources: Recently Used </h4>
        
        <a href="https://lmutpg.lmu.edu/C20995_tsa/web/login.jsp" target="_blank" rel="noopener noreferrer">
            <button className="bstyle button">
                <h2 className="btitle">Student Account Center</h2>
                <p className="btext">Check or manage tuiton balances and payment plan options.</p>
            </button>
        </a>
       
       <a href="https://auth.lmu.edu/mysso/redirect/dw.jsp" target="_blank" rel="noopener noreferrer">
            <button className="bstyle button">
                <h2 className="btitle">Degree Works</h2>
                <p className="btext">Check your Degree Audit and check your gradutation status.</p>
            </button>
        </a>

        <a href="https://brightspace.lmu.edu/d2l/login" target="_blank" rel="noopener noreferrer">
            <button className="bstyle button">
                <h2 className="btitle">Brightspace</h2>
                <p className="btext">Keep up with updates for current courses exams, grades, homework, and more.
                </p>
            </button>
       </a>

       <a href="http://libguides.lmu.edu/" target="_blank" rel="noopener noreferrer">
            <button className="bstyle button">
                <h2 className="btitle">LibGuides</h2>
                <p className="btext">Full list of Databases accessible through the library.</p>
            </button>
        </a>
   </div>
   </div>
</div>



   

   )
   }

   export default Dashboard