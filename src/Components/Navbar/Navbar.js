/* all code copied from Brian Design @https://www.youtube.com/watch?v=CXa0f4-dWi4 */

import React, {useState} from 'react'
import * as RiIcons from "react-icons/ri"
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import {lmuLogo} from '../../lmu.png'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <RiIcons.RiMenuLine onClick={showSidebar}/>
                </Link>
                {SearchBar()}
                <h1 className='pageTitle'>PAGE TITLE</h1>
                 {/* <img>src={lmuLogo}</img> */}
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <RiIcons.RiCloseFill />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    )
}

function SearchBar(){return (<p className='searchbar'> <input type="text" placeholder="Search"/></p>);}

export default Navbar