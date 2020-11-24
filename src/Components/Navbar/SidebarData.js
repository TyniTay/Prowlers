/* all code copied from Brian Design @https://www.youtube.com/watch?v=CXa0f4-dWi4 */

import React from 'react'
import * as RiIcons from "react-icons/ri"

export const SidebarData = [
      {
        title: 'PROFILE',
        path: '/',
        icon: <RiIcons.RiUser2Fill/>,
        cName: 'nav-text'
    },
    {
        title: 'DASHBOARD',
        path: '/dashboard',
        icon: <RiIcons.RiDashboardFill/>,
        cName: 'nav-text'
    },
    {
        title: 'ACCOUNTS',
        path: '/accounts',
        icon: <RiIcons.RiWallet3Fill/>,
        cName: 'nav-text'
    },
    {
        title: 'REGISTRATION',
        path: '/registration',
        icon: <RiIcons.RiCalendar2Fill/>,
        cName: 'nav-text'
    },
    {
        title: 'RECORDS',
        path: '/records',
        icon: <RiIcons.RiFilePaper2Fill/>,
        cName: 'nav-text'
    },
    {
        title: 'FINANCIAL AID',
        path: '/financial aid',
        icon: <RiIcons.RiMoneyDollarCircleFill/>,
        cName: 'nav-text'
    },
    {
        title: 'RESOURCES',
        path: '/resources',
        icon: <RiIcons.RiLightbulbFill/>,
        cName: 'nav-text'
    },
    {
        title: 'SETTINGS',
        path: '/settings',
        icon: <RiIcons.RiSettings3Fill/>,
        cName: 'nav-text'
    },
]
