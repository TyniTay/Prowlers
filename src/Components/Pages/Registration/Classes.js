import React, {useState, useEffect} from 'react'

const Classes = props => {
    console.log("CLASSES: ", props)
    return(
        <div style={{
            backgroundColor: "lightblue"
        }}
        value = {props}>
            {props.title}: {props.name}, Professor: {props.professor} <button value={props} type="submit">Add Course</button>
            
        </div>
    )
}

export default Classes