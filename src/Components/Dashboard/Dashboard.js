import React from 'react'
import Profile from '../Profile/Profile'
import FinancialAid from '../FinancialAid/FinancialAid'
import Registration from '../Registration/Registration'

const Dashboard = () => {
    return(
        <div>
            <Profile />
            <FinancialAid />
            <Registration />
        </div>
    )
}

export default Dashboard