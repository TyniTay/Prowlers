/* all code copied from Brian Design @https://www.youtube.com/watch?v=CXa0f4-dWi4 */

import React, {useState} from 'react'
import * as RiIcons from "react-icons/ri"
import { NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import {lmuLogo} from '../../lmu.png'

function SearchBar(){return (<p className='searchbar'> <input type="text" placeholder="Search"/></p>);}


function Navbar() {
    return (
        
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <NavLink className = "navLink" activeClassName="activeNavLink" to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                 {/* <img>src={lmuLogo}</img> */}
            </div>
        </IconContext.Provider>
    )
}

export default Navbar