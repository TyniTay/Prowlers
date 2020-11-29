import React from 'react'

const UserClasses = props => {
    
    console.log("userCLasses", props)
    return(
        <div style={{
            backgroundColor: "lightyellow"
        }}
        value = {props}>
            {props.title}: {props.name}, Professor: {props.professor}
            
        </div>
    )
}

export default UserClasses