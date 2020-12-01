import React, {useState, useEffect} from 'react'
import calendarImg from '../../../Assets/calendar.jpg'
import CalendarBlock from './CalendarBlock'
import './Registration.css'

const Calendar = props => {
    // 723 x 576 pixels
    return(
        <div className="calendarGrid" style={{height: '576px', width: '723px', backgroundImage: `url(${calendarImg})`}}>
            {props.userClasses.map(userClass => {
                if(userClass.days === "MWF") {
                    
                    return(
                        <div className={"time" + userClass.start + " monday"} key={userClass.title}>
                            <CalendarBlock {...userClass} />
                        </div>
                    )
                } else {
                    return(
                        <div className={"time" + userClass.start + " tuesday"}>
                            <CalendarBlock {...userClass} />
                        </div>
                    )
                }
                
                
            })}
        </div>
    )
}

export default Calendar