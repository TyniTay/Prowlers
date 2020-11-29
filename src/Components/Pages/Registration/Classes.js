import React, {useState, useEffect} from 'react'
import {newButton} from './Registration'
const Classes = props => {
    console.log("CLASSES: ", props.props)
    
    function handleButton(e) {
        console.log("this should print")
    }

    

    return(
        <div style={{
            backgroundColor: "lightblue"
        }}
        value = {props}>
            {props.title}: {props.name}, Professor: {props.professor}
            
        </div>
    )
}

export default Classes