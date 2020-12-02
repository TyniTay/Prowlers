import React, {useState} from "react"
import * as RiIcons from "react-icons/ri"
import { IconContext } from 'react-icons'
import {getUsername, setUsername} from "../../../Data";
import './StudentInfo.css'

//outputs email an ID text for re-use
function emailAndID(className) {
    return(
         <div className = {className}>
            <h3>University ID: 555555555</h3>
            <h3>Email: jjohn@lion.lmu.edu</h3>
        </div>
    )
}

//outputs legal name text for re-use
function legalName() {
    return (
        <h6 style={{color: '#454545', textIndent: '2px'}}>Legal Name: Jordan J Johnson</h6>
    )
}

//primary function
//outputs widget in one of two states: being edited or not being edited
const StudentInfo = () => {
    const [updatingInfo, setUpdatingInfo] = useState(false)

    const [name, setName] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [messageType, setMessageType] = useState("none")
    const [passwordMessage, setPasswordMessage] = useState("")


    const [isDisabled, setIsDisabled] = useState("false")

    //outputs newPassword form with given specifications for re-use
    function passwordForm(idName, placeholder, entryUpdater) {
        return(
            <input
                id = {idName}
                className = "passwordForm"
                type = "password"
                onBlur = {managePasswordFeedback}
                onChange = {e => (entryUpdater(e.target.value))}
                placeholder = {placeholder}
                style={{fontSize: '20px', padding: '0px 5px'}}
                >
            </input>
        )
    }

    //event handlers
    const handleUpdateInfo = () => {
        setUpdatingInfo(true)
        setIsDisabled(true)
    }

     const handleCancelUpdate = () => {
        setUpdatingInfo(false)
        setName(getUsername())
        setNewPassword("")
        setConfirmPassword("")
        setPasswordMessage("")
    }

    function onlyOnePassword () {
        if (newPassword !== "" && confirmPassword === "") {
            return true;
        } else {
            return (confirmPassword !== "" && newPassword == "");
        }
    }

    const attemptSubmit = (e) => {
        e.preventDefault()
    
        if (newPassword === confirmPassword) {
            setUpdatingInfo(false)
            if (name.length > 1) {
                setUsername(name)
            }
            setNewPassword("")
            setConfirmPassword("")
            setPasswordMessage("")
        } else {
            if (onlyOnePassword() && passwordMessage !== "enter password twice") {
                setMessageType("alert")
                setPasswordMessage("enter password twice")
                setIsDisabled(true)
            } else {
                managePasswordFeedback()
            }
        }
        if (document.activeElement.id === "theButton") {
            document.getElementById("theButton").blur();
        }
    }

    const manageNameFeedback = () => {
        if (document.getElementById("nameID").value !== "" && newPassword === confirmPassword) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }

    const managePasswordFeedback = (e) => {
        if(newPassword !== "" && confirmPassword !== "") {
            if(newPassword === confirmPassword) {
                setMessageType("confirmation")
                setPasswordMessage("valid newPassword")
                setIsDisabled(false)
            } else {
                setMessageType("alert")
                setPasswordMessage("passwords do not match")
                setIsDisabled(true)
            }
        } else if (newPassword === "" && confirmPassword === "") {
            setPasswordMessage("")
            manageNameFeedback()
        } else if (passwordMessage !== "enter password twice") {
            setPasswordMessage("")
            setIsDisabled(true)
        }
    }
    
    //End of helper function section

    if (updatingInfo) { 
        //view of the widget in editing mode     
        return(
            <div className = "widgets">
                <div className="profile editable">
                    <form className="editableInfo" 
                        onSubmit={attemptSubmit}>
                        <div className ="studentName">
                            <input

                                id = "nameID"
                                type = "text"
                                onBlur = {manageNameFeedback}
                                placeholder={getUsername()}
                                onChange = {e => setName(e.target.value)}
                                style={{fontSize: '20px', padding: '0px 5px'}}
                                >
                            </input>
                            {legalName()}
                        </div>
                        {passwordForm("passwordID", "change password", setNewPassword)}
                        {passwordForm("confirmPasswordID", "confirm password", setConfirmPassword)}
                        
                        <h4 className = {messageType}>{passwordMessage}</h4>

                        <button 
                            id = "theButton"
                            className={isDisabled ? "disabledButton" : "submitButton"}
                            onClick={attemptSubmit}> Submit
                        </button>
                    </form>

                    {emailAndID("emailAndID disclaimerBelow")}
                    <h6 className="updateDisclaimer" style={{color: '#454545', textIndent: '2px'}}>
                        Contact administration to update your email and legal name
                    </h6>
                    <IconContext.Provider value={{size: '2em'}}>
                        <button  className = "cancelButton" onClick={handleCancelUpdate}>
                            <RiIcons.RiCloseFill/>
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

    //view of the widget when nothing is being edited
    return (
        <div className = "widgets">
            <div className="profile">
                <div className ="studentName">
                    <h2>{getUsername()}</h2>
                    {legalName()}
                </div>
                    {emailAndID("emailAndID")}
                <IconContext.Provider value={{size: '2em'}}>
                    <button className = "editButton" onClick={handleUpdateInfo}>
                        <RiIcons.RiMoreFill/>
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