import React, {useState, useEffect} from "react";
import profileImage from "../../../Assets/noprofilepic.png";
import './Profile.css'

const Profile = (props) => {
    const [showUpdateInfo, setShowUpdateInfo] = useState(false)
    const [name, setName] = useState("Jordan Johnson")
    const [password, setPassword] = useState("12345")

    const updateInfoButtonPress = () => {
        setShowUpdateInfo(true)
    }

    const confirmInfoUpdatePress = () => {
        setShowUpdateInfo(false)
    }

    const handleKeypress = (e) => {
        if (e.keyCode === 13) {
            confirmInfoUpdatePress();
        }
    }

    if (showUpdateInfo) {
        return(
            <div className="updatePage">
                <form className="updateForm">
                    <input
                        id = "updateName"
                        placeolder = "Input updated name."
                        type = "text"
                        onChange = {e => setName(e.target.value)}
                        value = {name}
                        onKeyDown={handleKeypress}
                        >
                    </input>
                </form>
                <button className = "confirmButton" onClick={confirmInfoUpdatePress}>confirm changes</button>
            </div>
        )
    }
    return (
        <div className="profile">
            <div className="profileImage">
                <img style={{display:'inline-block'}} src={profileImage} alt="loading" width="100px" height="100px"></img>
            </div>
            <div className="studentInfo">
                <h1 style={{display:'inline-block'}}>{name}</h1>
                <h2 style={{display:'inlineFlex'}}>University ID: 555555555</h2>
                <h2 style={{display:'inlineFlex'}}>Email: jjohn@lion.lmu.edu</h2>
            </div>
            <button className = "updateButton"onClick={updateInfoButtonPress}>update info</button>
        </div>
    );
};

export default Profile;