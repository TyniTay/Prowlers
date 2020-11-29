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
            {props.title}: {props.name}, Professor: {props.professor}, Days: {props.days}, Time: {props.start%12}:00
            
        </div>
    )
}

export default Classes