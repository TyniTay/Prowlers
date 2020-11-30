import React, {useState, useEffect} from 'react'

import MajorList from '../../../classes.json'
import KeyMajorList from '../../../classesKey.json'
import CoreList from '../../../coreClasses.json'
import KeyCoreList from '../../../coreClassesKey.json'
import Classes from './Classes'
import UserClasses from './UserClasses'
import Calendar from './Calendar'
import './Registration.css'


const Registration = props => {
    const [availableClasses, setAvailableClasses] = useState(MajorList)
    const [keyClassList, setKeyClassList] = useState(KeyMajorList)
    const [userClasses, setUserClasses] = useState([])
    const [readyToSort, setReadyToSort] = useState(false)

    function addClass(toAdd) {
        return new Promise(function(resolve, reject) {
            try {
                let newArray = [...userClasses, toAdd]
                setUserClasses(newArray)
                resolve(newArray)
            } catch {
                reject()
            }
            
        })
    }

    function removeClass(toRemove) {
        setUserClasses(userClasses =>userClasses.filter(spec => spec.title !== toRemove))
    }
    
    function handleAddSubmit(e) {
        e.preventDefault()
        for(let i=0; i<userClasses.length; i++) {
            if (userClasses[i].name === keyClassList[e.nativeEvent.submitter.id].name) {
                return
            }
        }
        addClass(keyClassList[e.nativeEvent.submitter.id])
            .then((result) => {
                result.sort(function(a,b) {
                    console.log("test cum guzzlers: ", a.start < b.start)
                    return a.start - b.start
                })
                console.log("LOOK HERE: " , result)
                setUserClasses([...result])
            })
        

        //sort the shit

        //removeAvailableClasses(keyClassList[e.nativeEvent.submitter.id].title)
    }
    

    function handleDeleteSubmit(e) {
        e.preventDefault()
        removeClass(keyClassList[e.nativeEvent.submitter.id].title)
        //addAvailableClasses(keyClassList[e.nativeEvent.submitter.id])
    }

    function handleFilterSubmit(e) {
        e.preventDefault()
        if(e.nativeEvent.submitter.id == "University Core") {
            setAvailableClasses(CoreList)
            setKeyClassList(KeyCoreList)
        } else if(e.nativeEvent.submitter.id == "Major Courses") {
            setAvailableClasses(MajorList)
            setKeyClassList(KeyMajorList)
        }
    }

    function compareStartTimes(timeA, timeB) {
        return timeA.start > timeB.start
    }

    return(
        <div className="registration">
            <form className="filters" onSubmit={handleFilterSubmit}>
                <button className="filterButton" type="submit" id="University Core">Unviersity Core</button>
                <button className="filterButton" type="submit" id="Major Courses">Major Courses</button>
            </form>
            
            <h1>Available Courses</h1>
            <div className="classList">
                {availableClasses.map(spec => (
                    <form onSubmit={handleAddSubmit} key = {spec.title} className="availableClasses">
                        <Classes {...spec} />
                        <button className="addClass" id={spec.title} type="submit">Add Class</button> 
                    </form>
                            
                ))}
            </div>
            
            <h1>Tentative Schedule</h1>
            <div className="userClassList">
                {userClasses.map(userClass => (
                    <form onSubmit={handleDeleteSubmit} key = {userClass.title} className="userClasses">
                        <UserClasses  {...userClass}/>
                        <button className="removeClass" id={userClass.title} type="submit">Remove</button>
                    </form>
                ))}
            </div>
            
            <h1>Calendar</h1>  
            <Calendar userClasses={userClasses} />
        </div>
    )
}
export default Registration

/*
<Classes {...spec}/>
{newButton(spec)}

<div style={{display: 'flex', padding: '10px', justifyContent: 'space-between'}}>
                        
                    </div>


*/