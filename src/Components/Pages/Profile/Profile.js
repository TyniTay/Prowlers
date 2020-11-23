import React, {useState, useEffect} from "react";
import profileImage from "../../../Assets/noprofilepic.png";

const Profile = (props) => {
    const [showUpdateInfo, setShowUpdateInfo] = useState(false)
    const [password, setPassword] = useState("12345")
    const [name, setName] = useState("Jordan Johnson")

    useEffect(() => {
        console.log("peepee")
    }, [showUpdateInfo])

    const updateInfoButtonPress = (e) => {
        setShowUpdateInfo(true)
    }

    const confirmInfoUpdatePress = (e) => {
        setShowUpdateInfo(false)
    }

    if (showUpdateInfo) {
        return(
            <div>
                Update Information
                
                <form>
                    Update name
                    <input
                        id = "updateName"
                        placeolder = "Input updated name."
                        type = "text"
                        onChange = {e => setName(e.target.value)}
                        value = {name}
                        >
                    </input>
                </form>
                <button onClick={confirmInfoUpdatePress}>Confirm changes</button>
            </div>
        )
    }
    return (
        <div style={{ backgroundColor: "lightBlue" }}>
            <img style={{display:'inline-block'}} src={profileImage} alt="loading" width="100px" height="100px"></img>
            <h1 style={{display:'inline-block'}}>{name}</h1>
            <h2 style={{display:'inlineFlex'}}>University ID: 555555555</h2>
            <button onClick={updateInfoButtonPress}>update information</button>
        </div>
    );
};

export default Profile;

/*



*/