import React, {useState, useEffect} from 'react'
import calendarImg from '../../../Assets/calendar.jpg'
import CalendarBlock from './CalendarBlock'

const Calendar = props => {
    // 723 x 576 pixells
    console.log("Calendar: " , props)
    return(
        <div>
            {props.userClasses.map(userClass => (
                <div key={userClass.title} style={{zIndex: -1}}>
                    <CalendarBlock {...userClass} />
                </div>
            ))}
            <img alt="loading" style={{top:'1000px',position: "absolute"}}src = {calendarImg} ></img>
            
        </div>
    )
}

export default Calendar


/*

*/