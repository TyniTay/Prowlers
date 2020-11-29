import React, {useState, useEffect} from 'react'

const CalendarBlock = props => {
    console.log("Calendar Block: ", props)

    // if we have monday wednesday thursday draw 3 of them
    // else if we hhave tuesday thursday\
    const height = props.start * 20 + 500
    if (props.days === "MWF") {
        return(
            <div>
                <p style ={{
                    position: 'absolute',
                    top: height,
                    left: '35px',
                    backgroundColor: "lightgreen"
                }}>
                    {props.title}
                </p>
                <p style ={{
                    position: 'absolute',
                    top: height,
                    left: '315px',
                    backgroundColor: "lightgreen"
                }}>
                    {props.title}
                </p>
                <p style ={{
                    position: 'absolute',
                    top: height,
                    left: '600px',
                    backgroundColor: "lightgreen"
                }}>
                    {props.title}
                </p>
                
            </div>
        )
    } else {
        return(
            <div>
                <p style={{
                    position: 'absolute',
                    top: height,
                    left: '185px',
                    backgroundColor: "pink"
                }}>
                    {props.title}
                </p>
                <p style={{
                    position: 'absolute',
                    top: height,
                    left: '475px',
                    backgroundColor: "pink"
                }}>
                    {props.title}
                </p>
            </div>
        )
    }
    return(
        <div style={{backgroundColor:"pink"}}>
            this will be the block that shows up on the calendar
        </div>
    )
}

export default CalendarBlock