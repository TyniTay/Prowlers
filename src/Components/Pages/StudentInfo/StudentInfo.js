import React, {useState, useEffect} from "react"
import * as RiIcons from "react-icons/ri"
import { IconContext } from 'react-icons'
import profileImage from "../../../Assets/noprofilepic.png";
import {getUsername, setUsername} from "../../../Data";
import './StudentInfo.css'

const StudentInfo = (props) => {
    const [updatingInfo, setUpdatingInfo] = useState(false)
    const [name, setName] = useState(getUsername())
    const [password, setPassword] = useState("12345")

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

    if (updatingInfo) {
        return(
            <div className="profile editable">
                <form className="studentInfo">
                    <input
                        placeolder = "update name."
                        type = "text"
                        onChange = {e => setName(e.target.value)}
                        value = {name}
                        onKeyDown={handleKeypress}
                        >
                    </input>
                </form>
                <IconContext.Provider value={{size: '2em'}}>
                <button className = "updateButton" onClick={handleConfirmInfo}><RiIcons.RiLockUnlockFill/></button>
                </IconContext.Provider>
            </div>
        )
    }
    return (
        <div className="profile">
            {/* <div className="profileImage">
                <img style={{display:'inline-block'}} src={profileImage} alt="loading" width="100px" height="100px"></img>
            </div> */}
            <div className="studentInfo">
                <div className ="referToStudent">
                    <h2>{name}</h2>
                    <h6 style={{textIndent: '5px'}}>Legal Name: Jordan Johnson</h6>
                </div>
                <div className ="otherInfo">
                    <h3>University ID: 555555555</h3>
                    <h3>Email: jjohn@lion.lmu.edu</h3>
                </div>
            </div>
            <IconContext.Provider value={{size: '2em'}}>
                <button className = "updateButton" onClick={handleUpdateInfo}><RiIcons.RiLockFill/></button>
            </IconContext.Provider>
        </div>
    );
};

export default StudentInfo;