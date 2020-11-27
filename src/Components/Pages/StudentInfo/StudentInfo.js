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


var somethingTyped = false;

const StudentInfo = (props) => {
    const [updatingInfo, setUpdatingInfo] = useState(false)
    const [name, setName] = useState(getUsername())

    const [changeEntry, setChangeEntry] = useState("")
    const [confirmEntry, setConfirmEntry] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("")
    

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

    const handlePasswordBlur = (e) => {
        console.log("HANDLING PASSWORD BLUR")
        setPasswordMessage("Here is the password message")
    }

    function passwordForm(placeholder, entryUpdater) {
        return(
            <input
                className="passwordForm"
                type = "password"
                onBlur = {handlePasswordBlur}
                onChange = {e => (entryUpdater(e.target.value))}
                placeholder = {placeholder}
                style={{fontSize: '20px', padding: '0px 5px'}}
                >
            </input>
        )
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
                {passwordForm("change password", setChangeEntry)}
                {passwordForm("confirm password", setConfirmEntry)}
                <h2>{passwordMessage}</h2>
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