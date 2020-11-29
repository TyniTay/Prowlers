import React, {useState, useEffect} from "react"
import * as RiIcons from "react-icons/ri"
import { IconContext } from 'react-icons'
import profileImage from "../../../Assets/noprofilepic.png";
import {getUsername, setUsername} from "../../../Data";
import './StudentInfo.css'

function emailAndID(className) {
    return(
         <div className = {className}>
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

const StudentInfo = () => {
    const [updatingInfo, setUpdatingInfo] = useState(false)
    const [name, setName] = useState(getUsername())
    const [changeEntry, setChangeEntry] = useState("")
    const [confirmEntry, setConfirmEntry] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("")
    const [messageType, setMessageType] = useState("none")

    const handleUpdateInfo = () => {
        setUpdatingInfo(true)
    }

    const handleConfirmInfo = () => {
        if (name === "") {
            console.log("GET USERNAME: "+getUsername())
            setName(getUsername())
            console.log("NAME: "+name)
        }
        if (changeEntry === confirmEntry) {
            setUpdatingInfo(false)
            setUsername(name)
            setChangeEntry("")
            setConfirmEntry("")
            setPasswordMessage("")
        } else if ((changeEntry !== "" ^ confirmEntry !== "")
            && passwordMessage != "enter password twice") {
                setMessageType("alert")
                setPasswordMessage("enter password twice")
        }
    }

    const handleCancelUpdate = () => {
        setUpdatingInfo(false)
        setName(getUsername())
        setChangeEntry("")
        setConfirmEntry("")
        setPasswordMessage("")
    }

    const handleKeypress = (e) => {
        var elementID = document.activeElement.id
        if (e.keyCode === 13) {
            document.getElementById(elementID).blur();
        }
    }

    const handlePasswordBlur = (e) => {
            if(changeEntry !== "" && confirmEntry !== "") {
                if(changeEntry === confirmEntry) {
                    setMessageType("confirmation")
                    setPasswordMessage("valid password")
                } else {
                    setMessageType("alert")
                    setPasswordMessage("passwords do not match")
                }
            } else if (changeEntry === "" && confirmEntry === "") {
                setPasswordMessage("")
            } else if (passwordMessage != "enter password twice") {
                setMessageType("alert")
                setPasswordMessage("")
            }
    }

    function passwordForm(idName, placeholder, entryUpdater) {
        return(
            <input
                id = {idName}
                className = "passwordForm"
                type = "password"
                onBlur = {handlePasswordBlur}
                onChange = {e => (entryUpdater(e.target.value))}
                onKeyDown={handleKeypress}
                placeholder = {placeholder}
                style={{fontSize: '20px', padding: '0px 5px'}}
                >
            </input>
        )
    }      

    if (updatingInfo) {        
        return(
            <div className = "widgets">
                <div className="profile editable">
                    <form className="studentName">
                        <input
                            className = "studentName"
                            id = "nameID"
                            type = "text"
                            value = {name}
                            onChange = {e => setName(e.target.value)}
                            onKeyDown={handleKeypress}
                            style={{fontSize: '20px', padding: '0px 5px'}}
                            >
                        </input>
                        {legalName()}
                    </form>
                    {passwordForm("changePasswordID", "change password", setChangeEntry)}
                    {passwordForm("confirmPasswordID", "confirm password", setConfirmEntry)}
                    <h4 className = {messageType}>{passwordMessage}</h4>
                    {emailAndID("emailAndID disclaimerBelow")}
                    <h6 className="updateDisclaimer" style={{color: '#454545', textIndent: '2px'}}>
                        Contact administration to update your email and legal name
                    </h6>
                    <IconContext.Provider value={{size: '2em'}}>
                        <button className = "cancelButton" onClick={handleCancelUpdate}>
                            <RiIcons.RiCloseFill/>
                        </button>
                    </IconContext.Provider>
                    <IconContext.Provider value={{size: '2em'}}>
                        <button className = "updateButton" onClick={handleConfirmInfo}>
                            <RiIcons.RiLockUnlockFill/>
                        </button>
                    </IconContext.Provider>
                </div>
                <div className="contacts">
                    <h4 style={{padding: "10px 10px 10px 20px", color: "#d9d9d9"}}>
                        the emergency contacts widget is unimplemented
                    </h4>
                </div>
            </div>
        )
    }
    return (
        <div className = "widgets">
            <div className="profile">
                <div className ="studentName">
                    <h2>{getUsername()}</h2>
                    {legalName()}
                </div>
                    {emailAndID("emailAndID")}
                <IconContext.Provider value={{size: '2em'}}>
                    <button className = "updateButton" onClick={handleUpdateInfo}>
                        <RiIcons.RiLockFill/>
                    </button>
                </IconContext.Provider>
            </div>
            <div className="contacts">
                 <h4 style={{padding: "10px 10px 10px 20px", color: "#d9d9d9"}}>
                        the emergency contacts widget is unimplemented
                </h4>
            </div>
        </div>
    );
};

export default StudentInfo;