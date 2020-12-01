/* major help with code from Brian Design @https://www.youtube.com/watch?v=CXa0f4-dWi4 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'

function Navbar() {
    return (
        
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <NavLink exact activeClassName="activeNavLink" className = "navLink" to={item.path}>
                                <div className = "icon">{item.icon}</div>
                                <span className = "title">{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
            </div>
        </IconContext.Provider>
    )
}

export default Navbar