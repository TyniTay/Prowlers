import React, {useState, useEffect} from 'react'

import ClassList from '../../../classes.json'
import KeyClassList from '../../../classesKey.json'
import Classes from './Classes'
import UserClasses from './UserClasses'
import Calendar from './Calendar'


const Registration = props => {
    const [availableClasses, setAvailableClasses] = useState(ClassList)
    const [userClasses, setUserClasses] = useState([])
    const [newClass, setNewClass] = useState()
    const [updateClass, setUpdateClass] = useState(false)

    function addClass(toAdd) {
        
        setUserClasses([...userClasses, toAdd])
    }

    function removeClass(toRemove) {
        setUserClasses(userClasses =>userClasses.filter(spec => spec.title !== toRemove))
    }

    function addAvailableClasses(toAdd) {
        setAvailableClasses([...availableClasses, toAdd])
    }

    function removeAvailableClasses(toRemove) {
        setAvailableClasses(availableClasses => availableClasses.filter(spec => spec.title !== toRemove))
    }

    function newButton(newClass) {
        return(
            <button style={{display:'inlineFlex'}} className={newClass.title} type="submit">Add Class</button>
        )
    }
    
    function handleAddSubmit(e) {
        e.preventDefault()
        for(let i=0; i<userClasses.length; i++) {
            if (userClasses[i].name === KeyClassList[e.nativeEvent.submitter.className].name) {
                return
            }
        }
        addClass(KeyClassList[e.nativeEvent.submitter.className]);
        removeAvailableClasses(KeyClassList[e.nativeEvent.submitter.className].title)
    }

    function handleDeleteSubmit(e) {
        e.preventDefault()
        removeClass(KeyClassList[e.nativeEvent.submitter.className].title)
        addAvailableClasses(KeyClassList[e.nativeEvent.submitter.className])
    }

    return(
        <div>
                
            <h1>filler</h1>
            <h2>filler</h2>
            <h1>Available Courses</h1>
            {availableClasses.map(spec => (
                <form onSubmit={handleAddSubmit} key = {spec.title}>
                    <Classes {...spec} />
                    {newButton(spec)}
                </form>
                        
            ))}
            <h1>Tentative Schedule</h1>
            {userClasses.map(userClass => (
                <form onSubmit={handleDeleteSubmit} key = {userClass.title}>
                    <UserClasses  {...userClass}/>
                    <button className={userClass.title} type="submit">Delete Class</button>
                </form>
            ))}
            <h1>Calendar</h1>  
            <Calendar userClasses={userClasses} />
        </div>
    )
}
export default Registration

/*
<Classes {...spec}/>
{newButton(spec)}




*/