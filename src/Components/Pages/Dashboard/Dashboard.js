import React from 'react'
import {getUsername} from "../../../Data";
import Profile from '../StudentInfo/StudentInfo'
import FinancialAid from '../FinancialAid/FinancialAid'
import Registration from '../Registration/Registration'

const Dashboard = () => {
    return(
        <div>
            {"Welcome to Your Dashboard, "+getUsername()+"!"}
        </div>
    )
}

export default Dashboard