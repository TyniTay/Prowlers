import React, {useState, useEffect} from 'react'
import {newButton} from './Registration'
import './Registration.css'
const Classes = props => {

    return(
        <div className="individualAvailable">
            {props.title}: {props.name}, Professor: {props.professor}, Days: {props.days}, Time: {props.start%12}:00
            
        </div>
    )
}

export default Classes