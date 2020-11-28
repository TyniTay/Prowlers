import React, {useState, useEffect} from 'react'
//import {Container, Row, Col} from 'react-bootstrap'
import ClassList from '../../../classes.json'
import Classes from './Classes'
import UserClasses from './UserClasses'

const Registration = props => {
    const [availableClasses, setAvailableClasses] = useState(ClassList)
    const [userClasses, setUserClasses] = useState([])

    function addClass(newClass) {
        setUserClasses([newClass, ...userClasses])
    }

    function handleSubmit(event) {
        console.log("LOOK HERE: ", event)
        event.preventDefault()
        addClass("s")
    }
    return(
        <div>
            This will be the registration page
            <form onSubmit={handleSubmit}>
                {availableClasses.map(spec => (
                    <div key={spec.title}>
                        <Classes {...spec}/>
                    </div>
                ))}
            {userClasses.map(userClass => (
                <div key = {userClass.title}>
                    <UserClasses {...userClass}/>
                </div>
            ))}
            </form>
            
        </div>
    )
}

export default Registration

/*
<Classes {...spec}/>





*/