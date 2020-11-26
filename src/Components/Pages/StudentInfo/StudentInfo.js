import React, {useState, useEffect} from "react"
import * as RiIcons from "react-icons/ri"
import { IconContext } from 'react-icons'
import profileImage from "../../../Assets/noprofilepic.png";
import {getUsername, setUsername} from "../../../Data";
import './StudentInfo.css'

function emailAndID() {
    return(
         <div className ="emailAndID">
                    <h3>University ID: 555555555</h3>
                    <h3>Email: jjohn@lion.lmu.edu</h3>
        </div>
    )
}

function legalName() {
    return (
        <h6 style={{color: '#454545', textIndent: '2px'}}>Legal Name: Jordan J Johnson</h6>
    )
}

const StudentInfo = (props) => {
    const [updatingInfo, setUpdatingInfo] = useState(false)
    const [name, setName] = useState(getUsername())

    const handleUpdateInfo = () => {
        setUpdatingInfo(true)
    }

    const handleConfirmInfo = () => {
        setUpdatingInfo(false)
        setUsername(name)
    }

    const handleKeypress = (e) => {
        if (e.keyCode === 13) {
            handleConfirmInfo();
        }
    }
    
    var passwordMismatch = false;

    function passwordForm(placeholder) {
        return(
            <input
                className="passwordForm"
                type = "text"
                placeholder = {placeholder}
                onKeyDown={handleKeypress}
                style={{fontSize: '20px', padding: '0px 5px'}}
                >
            </input>
        )
    }

    function passwordResetter(p1, p2) {
        if(p1 === p2) {
            return(
                <div>
                    {passwordForm("new password")}
                    {passwordForm("confirm password")}
                    <h6>passwords do not match</h6>
                </div>
            );
        }
        return(false);
    }

    if (updatingInfo) {
        return(
            <div className="profile editable">
                <form className="studentName">
                    <input
                        type = "text"
                        onChange = {e => setName(e.target.value)}
                        value = {name}
                        onKeyDown={handleKeypress}
                        style={{fontSize: '20px', padding: '0px 5px'}}
                        >
                    </input>
                    {legalName()}
                </form>
                {passwordForm("change password")}
                {passwordForm("confirm password")}
                {emailAndID()}
                <h6 className="updateDisclaimer" style={{color: '#454545', textIndent: '2px'}}>
                    Contact administration to update your email and legal name
                </h6>
                <IconContext.Provider value={{size: '2em'}}>
                    <button className = "updateButton" onClick={handleConfirmInfo}>
                        <RiIcons.RiLockUnlockFill/>
                    </button>
                </IconContext.Provider>
            </div>
        )
    }
    return (
        <div className="profile">
            {/* <div className="profileImage">
                <img style={{display:'inline-block'}} src={profileImage} alt="loading" width="100px" height="100px"></img>
            </div> */}
            <div className ="studentName">
                <h2>{name}</h2>
                {legalName()}
            </div>
            {emailAndID()}
            <IconContext.Provider value={{size: '2em'}}>
                <button className = "updateButton" onClick={handleUpdateInfo}>
                    <RiIcons.RiLockFill/>
                </button>
            </IconContext.Provider>
        </div>
    );
};

export default StudentInfo;