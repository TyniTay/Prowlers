import React from 'react'
import './Registration.css'

const UserClasses = props => {
    
    console.log("userCLasses", props)
    return(
        <div className="individualUser">
            {props.title}: {props.name}, Professor: {props.professor}, Days: {props.days}, Time: {props.start%12}:00
        </div>
    )
}

export default UserClasses