import React, {useState, useEffect} from 'react'
import './Registration.css'

const CalendarBlock = props => {
    console.log("Calendar Block: ", props)

    // if we have monday wednesday thursday draw 3 of them
    // else if we hhave tuesday thursday\
    const height = props.start * 30 + 500
    if (props.days === "MWF") {
        return(
            <div style={{display: 'flex', width: '700px'}}>
                <p className="mondayBlock">{props.title}</p>
                <p className="wednesdayBlock">{props.title}</p>
                <p className="fridayBlock">{props.title} </p>
            </div>
        )
    } else {
        return(
            <div style={{display: 'flex', width: '700px'}}>
                <p className="tuesdayBlock">{props.title}</p>
                <p className="thursdayBlock">{props.title}</p>
            </div>
        )
    }
}

export default CalendarBlock