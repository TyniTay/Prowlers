import React from 'react'

const UserClasses = props => {
    
    console.log("userCLasses", props)
    return(
        <div style={{
            backgroundColor: "lightyellow"
        }}
        value = {props}>
            {props.title}: {props.name}, Professor: {props.professor}, Days: {props.days}, Time: {props.start%12}:00
            
        </div>
    )
}

export default UserClasses